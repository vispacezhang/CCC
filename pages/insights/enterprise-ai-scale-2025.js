import Head from "next/head";
import SectionHeader from "../../components/SectionHeader";

export default function InsightEnterpriseAiScale() {
  return (
    <>
      <Head>
        <title>算力基础设施升级与企业AI规模化 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Insight"
            title="算力基础设施升级与企业AI规模化"
            subtitle="算力、网络与数据底座决定AI规模化速度。"
          />
          <article className="mt-10 space-y-8">
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                基础设施 · 2025-08-14 · 张大威撰写
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-white">AI规模化的关键前提正在形成</h1>
              <p className="mt-4 text-sm text-slate-200">
                数字基础设施的加速建设，意味着企业AI从试点走向规模化的“底座”正在完善。
                算力规模、网络覆盖与数据枢纽能力的提升，将直接决定AI转型节奏。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h2 className="text-lg font-semibold text-white">趋势信号</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>全国算力规模快速提升，AI训练与推理成本持续下降。</p>
                  <p>5G与算力网络完善，为工业互联网与现场AI部署提供条件。</p>
                  <p>数据基础设施建设加速，企业数据资产化门槛降低。</p>
                </div>
              </div>
              <div className="card">
                <h2 className="text-lg font-semibold text-white">企业行动建议</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>建立“算力+数据+业务”协同规划，避免孤岛式AI建设。</p>
                  <p>提前布局知识库与数据治理，提升AI落地效率。</p>
                  <p>以可量化KPI驱动AI投资回报，形成规模化路径。</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">CCC的落地方式</h2>
              <p className="mt-3 text-sm text-slate-200">
                我们以战略咨询 + 流程优化 + AI系统落地为一体，
                帮助企业将AI从项目推进转为组织能力，形成长期竞争优势。
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">张大威撰写</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
