import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import FinalCta from "../sections/FinalCta";

const posts = [
  {
    title: "中国企业AI转型指南",
    date: "2026-03-01",
    summary: "从战略认知、组织能力到治理体系的完整路线。"
  },
  {
    title: "AI Agent企业应用",
    date: "2026-02-18",
    summary: "将AI Agent嵌入关键流程，形成自动化执行力。"
  },
  {
    title: "企业如何利用AI提升效率",
    date: "2026-02-02",
    summary: "围绕可衡量KPI构建AI项目ROI模型。"
  },
  {
    title: "AI治理与安全架构",
    date: "2026-01-20",
    summary: "企业级AI治理框架与合规最佳实践。"
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>洞察 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Insights"
            title="AI洞察与行业观点"
            subtitle="研究与实践结合，持续输出可执行的AI战略思考。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{post.date}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{post.summary}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">阅读洞察 →</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

