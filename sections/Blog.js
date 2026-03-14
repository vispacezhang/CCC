import SectionHeader from "../components/SectionHeader";

const posts = [
  {
    title: "AI+制造专项行动实施意见要点",
    summary: "政策驱动下的制造业AI落地路径。",
    date: "2026-01-07",
    href: "/insights/ai-plus-manufacturing-2026"
  },
  {
    title: "生成合成内容标识办法落地",
    summary: "企业内容治理与合规的新基线。",
    date: "2025-03-14",
    href: "/insights/ai-content-labeling-2025"
  },
  {
    title: "供应链Agentic AI趋势",
    summary: "岗位与流程重构将如何发生。",
    date: "2026-02-25",
    href: "/insights/agentic-ai-supply-chain-2026"
  }
];

export default function Blog() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Insights"
          title="AI洞察与思想领导力"
          subtitle="持续输出AI战略方法论与行业最佳实践。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="card flex flex-col">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{post.date}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{post.summary}</p>
              <div className="mt-auto pt-6">
                <a href={post.href} className="text-xs uppercase tracking-[0.2em] text-accent">
                  阅读洞察 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
