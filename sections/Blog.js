import SectionHeader from "../components/SectionHeader";

const posts = [
  {
    title: "中国企业AI转型指南",
    summary: "从组织能力、数据资产到AI治理的系统路线。",
    date: "2026-03-01"
  },
  {
    title: "AI Agent企业应用",
    summary: "将AI Agent嵌入流程，让业务决策更智能。",
    date: "2026-02-18"
  },
  {
    title: "企业如何利用AI提升效率",
    summary: "以可量化KPI驱动AI落地与ROI回报。",
    date: "2026-02-02"
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
                <span className="text-xs uppercase tracking-[0.2em] text-accent">阅读洞察 →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

