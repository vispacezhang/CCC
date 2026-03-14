import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import FinalCta from "../sections/FinalCta";

const posts = [
  {
    title: "AI+制造专项行动实施意见要点",
    date: "2026-01-07",
    summary: "政策信号指向制造业AI落地的三条主线。",
    href: "/insights/ai-plus-manufacturing-2026"
  },
  {
    title: "生成合成内容标识办法落地",
    date: "2025-03-14",
    summary: "企业内容治理与AI合规的新基线。",
    href: "/insights/ai-content-labeling-2025"
  },
  {
    title: "供应链Agentic AI趋势",
    date: "2026-02-25",
    summary: "岗位与流程重构将如何发生。",
    href: "/insights/agentic-ai-supply-chain-2026"
  },
  {
    title: "算力基础设施升级与企业AI规模化",
    date: "2025-08-14",
    summary: "算力、数据与网络底座决定AI规模化速度。",
    href: "/insights/enterprise-ai-scale-2025"
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
                <a
                  href={post.href}
                  className="mt-6 inline-flex text-xs uppercase tracking-[0.2em] text-accent"
                >
                  阅读洞察 →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
