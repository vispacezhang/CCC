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
                发布视角 · 2026-01-07 · 张大威撰写
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-white">制造企业的AI落地进入“行动期”</h1>
              <p className="mt-4 text-sm text-slate-200">
                近期“AI+制造”专项行动实施意见的发布，释放出强烈信号：AI不再停留在工具层面，
                而是以制造业场景为牵引，加速进入流程、系统与组织能力的重构阶段。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h2 className="text-lg font-semibold text-white">政策要点解读</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>政策聚焦“场景牵引 + 数据支撑 + 系统集成”，鼓励企业把AI嵌入关键生产与经营流程。</p>
                  <p>强调工业数据治理与工业软件能力，为智能工厂与供应链协同奠定基础。</p>
                  <p>释放“可复制、可规模化”的落地方向，避免仅在试点层面停留。</p>
                </div>
              </div>
              <div className="card">
                <h2 className="text-lg font-semibold text-white">企业行动建议</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>建立AI场景清单与价值评估框架，优先选择可闭环的流程。</p>
                  <p>同步推进数据资产化与流程标准化，减少“AI无法接入”的断层。</p>
                  <p>搭建AI治理机制，明确安全、责任与迭代节奏。</p>
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
