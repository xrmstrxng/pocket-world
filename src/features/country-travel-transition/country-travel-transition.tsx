"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, FocusEvent, KeyboardEvent, MouseEvent, PointerEvent, ReactNode } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface TravelState {
  destination: string;
  direction: "forward" | "reverse";
  reducedMotion: boolean;
  flightPath: string;
}

const TRAVEL_DURATION_MS = 1_700;
const NAVIGATION_START_MS = 0;
const REDUCED_NAVIGATION_MS = 80;
const REDUCED_FINISH_MS = 220;

function getCountryCard(target: EventTarget | null, container: HTMLDivElement | null) {
  if (!(target instanceof Element)) return null;
  const link = target.closest<HTMLAnchorElement>("a[href]");
  if (!link || !container?.contains(link)) return null;
  if (link.matches(".country-card[data-country-travel], .back-link")) return link;

  const destination = new URL(link.href, window.location.href);
  const isLeavingCountry = isCountryPage(window.location.pathname)
    && destination.origin === window.location.origin
    && !isCountryPage(destination.pathname);
  return isLeavingCountry ? link : null;
}

function isCountryPage(pathname: string) {
  return /^\/(?:pt-BR|en)\/countries\/[^/?#]+\/?$/.test(pathname);
}

export function CountryTravelTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCardRef = useRef<HTMLAnchorElement | null>(null);
  const snapshotRef = useRef<HTMLDivElement | null>(null);
  const timeoutIdsRef = useRef<Set<number>>(new Set());
  const prefetchedRef = useRef<Set<string>>(new Set());
  const forceTopPathRef = useRef<string | null>(null);
  const lockedRef = useRef(false);
  const [travel, setTravel] = useState<TravelState | null>(null);

  useLayoutEffect(() => {
    const shouldForceTop = isCountryPage(pathname) || forceTopPathRef.current === pathname;
    if (!shouldForceTop) return;

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      resetScroll();
      secondFrame = window.requestAnimationFrame(() => {
        resetScroll();
        forceTopPathRef.current = null;
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  function schedule(callback: () => void, delay: number) {
    const timeoutId = window.setTimeout(() => {
      timeoutIdsRef.current.delete(timeoutId);
      callback();
    }, delay);
    timeoutIdsRef.current.add(timeoutId);
  }

  function beginTravel(card: HTMLAnchorElement) {
    if (lockedRef.current) return;

    const url = new URL(card.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    lockedRef.current = true;
    activeCardRef.current = card;
    card.classList.add("is-departing");
    const direction: TravelState["direction"] = card.matches(".back-link")
      || (isCountryPage(window.location.pathname) && !isCountryPage(url.pathname))
      ? "reverse"
      : "forward";
    createPageSnapshot(direction);

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerY = Math.round(viewportHeight / 2);
    const flightPath = `M 0 ${centerY} L ${viewportWidth} ${centerY}`;
    const destination = `${url.pathname}${url.search}${url.hash}`;
    forceTopPathRef.current = url.pathname;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setTravel({
      destination,
      direction,
      reducedMotion,
      flightPath: direction === "reverse"
        ? `M ${viewportWidth} ${centerY} L 0 ${centerY}`
        : flightPath,
    });

    if (!reducedMotion) {
      schedule(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        router.push(destination, { scroll: true });
      }, NAVIGATION_START_MS);
      schedule(finishTravel, TRAVEL_DURATION_MS);
      return;
    }

    schedule(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      router.push(destination, { scroll: true });
    }, REDUCED_NAVIGATION_MS);
    schedule(finishTravel, REDUCED_FINISH_MS);
  }

  function finishTravel() {
    snapshotRef.current?.remove();
    snapshotRef.current = null;
    activeCardRef.current?.classList.remove("is-departing");
    activeCardRef.current = null;
    lockedRef.current = false;
    setTravel(null);
  }

  function createPageSnapshot(direction: TravelState["direction"]) {
    const shell = containerRef.current?.querySelector<HTMLElement>(".site-shell");
    if (!shell) return;

    snapshotRef.current?.remove();
    const viewport = document.createElement("div");
    const snapshot = shell.cloneNode(true) as HTMLElement;
    viewport.className = `country-travel-origin-snapshot${direction === "reverse" ? " is-reverse" : ""}`;
    viewport.setAttribute("aria-hidden", "true");
    viewport.setAttribute("inert", "");
    snapshot.style.transform = `translateY(-${window.scrollY}px)`;
    viewport.appendChild(snapshot);
    document.body.appendChild(viewport);
    snapshotRef.current = viewport;
  }

  useEffect(() => {
    const timeoutIds = timeoutIdsRef.current;
    const handlePopState = () => {
      if (lockedRef.current) return;

      lockedRef.current = true;
      const destination = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const direction = isCountryPage(window.location.pathname)
        ? "forward"
        : "reverse";
      createPageSnapshot(direction);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const centerY = Math.round(window.innerHeight / 2);
      setTravel({
        destination,
        direction,
        reducedMotion,
        flightPath: direction === "reverse"
          ? `M ${window.innerWidth} ${centerY} L 0 ${centerY}`
          : `M 0 ${centerY} L ${window.innerWidth} ${centerY}`,
      });

      const timeoutId = window.setTimeout(() => {
        timeoutIds.delete(timeoutId);
        finishTravel();
      }, reducedMotion ? REDUCED_FINISH_MS : TRAVEL_DURATION_MS);
      timeoutIds.add(timeoutId);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIds.clear();
      activeCardRef.current?.classList.remove("is-departing");
      snapshotRef.current?.remove();
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const card = getCountryCard(event.target, containerRef.current);
    if (!card) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (card.target && card.target !== "_self") return;

    event.preventDefault();
    if (!lockedRef.current) beginTravel(card);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== " " && event.key !== "Spacebar") return;
    const card = getCountryCard(event.target, containerRef.current);
    if (!card) return;

    event.preventDefault();
    if (!lockedRef.current) beginTravel(card);
  }

  function prefetchCountryCard(target: EventTarget | null) {
    const card = getCountryCard(target, containerRef.current);
    if (!card) return;
    const destination = `${card.pathname}${card.search}${card.hash}`;
    if (prefetchedRef.current.has(destination)) return;
    prefetchedRef.current.add(destination);
    router.prefetch(destination);
  }

  function handlePointerOver(event: PointerEvent<HTMLDivElement>) {
    prefetchCountryCard(event.target);
  }

  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    prefetchCountryCard(event.target);
  }

  const planeStyle: CSSProperties | undefined = travel
    ? { offsetPath: `path("${travel.flightPath}")` }
    : undefined;

  return (
    <div
      className="country-travel-transition"
      ref={containerRef}
      aria-busy={travel ? true : undefined}
      onClickCapture={handleClick}
      onKeyDownCapture={handleKeyDown}
      onPointerOverCapture={handlePointerOver}
      onFocusCapture={handleFocus}
    >
      {children}
      {travel ? (
        <div
          className={`country-travel-stage${travel.direction === "reverse" ? " is-reverse" : ""}${travel.reducedMotion ? " is-reduced" : ""}`}
          aria-hidden="true"
        >
          <span className="country-travel-curtain" />
          {!travel.reducedMotion ? (
            <span className="country-travel-plane" style={planeStyle}>
              <span className="country-travel-contrail" />
              <span className="country-travel-smoke" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="country-travel-plane__bob">
                <Image
                  src="/images/travel-plane-pw-8bit.png"
                  alt=""
                  width={760}
                  height={341}
                  priority
                  style={travel.direction === "reverse" ? { transform: "scaleX(-1)" } : undefined}
                />
              </span>
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
