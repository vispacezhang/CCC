import Head from "next/head";
import SectionHeader from "../../components/SectionHeader";

export default function InsightAiPlusManufacturing() {
  return (
    <>
      <Head>
        <title>AI+制造专项行动实施意见要点 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Insight"
            title="AI+制造专项行动实施意见要点"
            subtitle="从政策信号到企业行动，构建可复制的AI制造路径。"
          />
          <article className="mt-10 space-y-8">
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                政策解读 · 2026-01-07 · 张大威撰写
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-white">制造企业的AI落地进入“行动期”</h1>
              <p className="mt-4 text-sm text-slate-200">
                近日，工信部等部门印发《“人工智能+制造”专项行动实施意见》，
                释放出明确信号：AI将从工具层面进入生产流程与组织能力的系统性重构阶段。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h2 className="text-lg font-semibold text-white">政策信号</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>以制造场景为牵引，加速AI在生产、质检、供应链、能耗等关键流程的落地。</p>
                  <p>强调工业数据资产与系统集成能力，为规模化应用打基础。</p>
                  <p>鼓励形成可复制、可推广的行业解决方案。</p>
                </div>
              </div>
              <div className="card">
                <h2 className="text-lg font-semibold text-white">企业行动建议</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>建立AI场景清单与ROI评估机制，优先选择闭环流程。</p>
                  <p>同步推进数据治理与流程标准化，降低AI接入成本。</p>
                  <p>搭建AI治理与安全机制，保证可持续迭代。</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">CCC的落地方式</h2>
              <p className="mt-3 text-sm text-slate-200">
                我们以“三阶赋能模型”为抓手，帮助制造企业完成从认知共识、流程重构到战略跃迁的系统升级，
                将政策导向转化为可衡量的业务成果与长期竞争优势。
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">张大威撰写</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
