import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "服务", href: "/services" },
  { label: "案例", href: "/case-studies" },
  { label: "团队", href: "/team" },
  { label: "洞察", href: "/blog" },
  { label: "评估", href: "/assessment" },
  { label: "联系", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/80 backdrop-blur">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold tracking-[0.2em]">CCC</span>
          <span className="font-display text-base sm:text-lg">CCC AI咨询</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="cta-primary">
            预约AI咨询
          </Link>
        </nav>
        <button
          className="flex items-center justify-center rounded-full border border-white/15 p-2 text-white/80 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-deep/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="cta-primary" onClick={() => setOpen(false)}>
              预约AI咨询
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}



