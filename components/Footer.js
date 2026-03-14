import Link from "next/link";

const navItems = [
  { label: "服务", href: "/services" },
  { label: "案例", href: "/case-studies" },
  { label: "团队", href: "/team" },
  { label: "洞察", href: "/blog" },
  { label: "评估", href: "/assessment" },
  { label: "联系", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/80">
      <div className="container-pad py-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold tracking-[0.2em]">CCC</span>
              <span className="font-display text-lg">CCC AI Consulting</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-300">
              帮助传统中国企业用AI与AI Agent升级组织能力，构建长期战略优势。
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">导航</p>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-200 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">联系</p>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              <p>上海 | 深圳 | 新加坡</p>
              <p>zhangliwei.superman@gmail.com</p>
              <p>企业AI转型与战略咨询</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>? 2026 CCC AI Consulting. All rights reserved.</p>
          <p>可信 · 战略 · 技术领导力</p>
        </div>
      </div>
    </footer>
  );
}



