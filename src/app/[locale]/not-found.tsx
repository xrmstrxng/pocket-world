import Link from "next/link";

export default function NotFound() {
  return <section className="empty-state not-found"><span>404</span><h1>Lost coordinates</h1><p>This point is not on our map yet.</p><Link className="button button--dark" href="/pt-BR">Pocket World</Link></section>;
}

