import Head from "next/head";
import SectionHeader from "../../components/SectionHeader";

export default function InsightAgenticAiSupplyChain() {
  return (
    <>
      <Head>
        <title>供应链Agentic AI趋势 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Insight"
            title="供应链Agentic AI趋势"
            subtitle="从“自动化”升级为“自主决策”的组织挑战。"
          />
          <article className="mt-10 space-y-8">
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                行业趋势 · 2026-02-25 · 张大威撰写
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-white">Agentic AI将重塑供应链岗位与流程</h1>
              <p className="mt-4 text-sm text-slate-200">
                最新行业调研显示，超过一半的供应链负责人预计未来几年内，
                Agentic AI将减少入门级岗位需求，并推动供应链决策机制再设计。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h2 className="text-lg font-semibold text-white">关键信号</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>“AI自主决策”将从单点优化扩展到跨流程协同与异常处理。</p>
                  <p>岗位结构发生变化：对业务理解与系统协作能力要求更高。</p>
                  <p>流程设计需要为AI留出“决策位”，并设定审计与干预机制。</p>
                </div>
              </div>
              <div className="card">
                <h2 className="text-lg font-semibold text-white">企业行动建议</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>优先改造高频异常处理与跨部门协同流程。</p>
                  <p>建立Agent权限边界与人工复核策略，避免黑箱化决策。</p>
                  <p>同步升级岗位能力体系，建设“AI协作型人才”。</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">CCC的落地方式</h2>
              <p className="mt-3 text-sm text-slate-200">
                我们以流程重构与Agent设计为核心，帮助供应链企业建立“可监督的AI自治系统”，
                实现效率提升与风险控制的平衡。
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">张大威撰写</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
