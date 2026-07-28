// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import Link from "next/link";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CountryTravelTransition } from "./country-travel-transition";

const { prefetch, push } = vi.hoisted(() => ({ prefetch: vi.fn(), push: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ prefetch, push }),
}));

function mockReducedMotion(matches: boolean) {
  vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
    matches,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

function renderTransition() {
  render(
    <CountryTravelTransition>
      <div className="site-shell">
        <Link className="country-card" data-country-travel href="/pt-BR/countries/brazil">Brasil</Link>
        <Link className="country-card" data-country-travel href="/pt-BR/countries/japan">Japão</Link>
      </div>
    </CountryTravelTransition>,
  );
  return screen.getByRole("link", { name: "Brasil" });
}

describe("CountryTravelTransition", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    push.mockReset();
    prefetch.mockReset();
    mockReducedMotion(false);
  });

  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("navigates near the start and keeps one continuous flight animation", () => {
    const brazil = renderTransition();

    fireEvent.click(brazil);
    fireEvent.click(screen.getByRole("link", { name: "Japão" }));

    expect(brazil).toHaveClass("is-departing");
    expect(document.querySelector(".country-travel-stage")).not.toBeNull();
    expect(document.querySelector(".country-travel-origin-snapshot")).not.toBeNull();
    expect(document.querySelector(".country-travel-plane")).not.toBeNull();

    act(() => vi.advanceTimersByTime(100));
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/pt-BR/countries/brazil");
    expect(document.querySelector(".country-travel-plane")).not.toBeNull();

    act(() => vi.advanceTimersByTime(1_600));
    expect(document.querySelector(".country-travel-stage")).toBeNull();
    expect(document.querySelector(".country-travel-origin-snapshot")).toBeNull();
  });

  it("uses a short fade and no plane when reduced motion is requested", () => {
    mockReducedMotion(true);
    const brazil = renderTransition();

    fireEvent.keyDown(brazil, { key: " " });

    expect(document.querySelector(".country-travel-stage")).toHaveClass("is-reduced");
    expect(document.querySelector(".country-travel-plane")).toBeNull();

    act(() => vi.advanceTimersByTime(80));
    expect(push).toHaveBeenCalledWith("/pt-BR/countries/brazil");
    act(() => vi.advanceTimersByTime(140));
    expect(document.querySelector(".country-travel-stage")).toBeNull();
  });

  it("prefetches cards and animates browser back navigation", () => {
    const brazil = renderTransition();

    fireEvent.pointerOver(brazil);
    fireEvent.pointerOver(brazil);
    expect(prefetch).toHaveBeenCalledTimes(1);
    expect(prefetch).toHaveBeenCalledWith("/pt-BR/countries/brazil");

    act(() => window.dispatchEvent(new PopStateEvent("popstate")));
    expect(document.querySelector(".country-travel-stage")).toHaveClass("is-reverse");
    expect(document.querySelector(".country-travel-origin-snapshot")).toHaveClass("is-reverse");

    act(() => vi.advanceTimersByTime(1_700));
    expect(document.querySelector(".country-travel-stage")).toBeNull();
  });

  it("reverses the plane when the country back link is clicked", () => {
    render(
      <CountryTravelTransition>
        <div className="site-shell">
          <Link className="back-link" href="/pt-BR/countries">Voltar</Link>
        </div>
      </CountryTravelTransition>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Voltar" }));
    const stage = document.querySelector(".country-travel-stage");
    const plane = document.querySelector<HTMLElement>(".country-travel-plane");

    expect(stage).toHaveClass("is-reverse");
    expect(plane?.style.offsetPath).toContain(`M ${window.innerWidth}`);
    act(() => vi.advanceTimersByTime(0));
    expect(push).toHaveBeenCalledWith("/pt-BR/countries");
  });

  it("clears pending navigation when unmounted", () => {
    const { unmount } = render(
      <CountryTravelTransition>
        <Link className="country-card" data-country-travel href="/en/countries/canada">Canada</Link>
      </CountryTravelTransition>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Canada" }));
    unmount();
    act(() => vi.advanceTimersByTime(1_700));

    expect(push).not.toHaveBeenCalled();
  });
});
