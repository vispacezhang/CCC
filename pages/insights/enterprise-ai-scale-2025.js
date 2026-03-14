import Head from "next/head";
import SectionHeader from "../../components/SectionHeader";

export default function InsightEnterpriseAiScale() {
  return (
    <>
      <Head>
        <title>企业AI规模化路径 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Insight"
            title="企业AI规模化路径"
            subtitle="从试点走向价值闭环的关键能力。"
          />
          <article className="mt-10 space-y-8">
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                行业洞察 · 2025-04-09 · 张大威撰写
              </p>
              <h1 className="mt-4 text-2xl font-semibold text-white">企业AI进入规模化阶段</h1>
              <p className="mt-4 text-sm text-slate-200">
                最新企业AI报告显示，生成式AI已从探索期进入规模化应用期，
                企业更关注安全、治理、组织协同与业务价值的可衡量产出。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h2 className="text-lg font-semibold text-white">规模化的三大门槛</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>数据资产与流程标准化不足，导致AI无法稳定接入。</p>
                  <p>缺少统一的AI治理与安全框架，难以跨部门推广。</p>
                  <p>业务KPI与AI价值未打通，缺乏可持续投入依据。</p>
                </div>
              </div>
              <div className="card">
                <h2 className="text-lg font-semibold text-white">落地路线建议</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <p>建立“价值驱动”的场景优先级机制，先解决高收益流程。</p>
                  <p>建设企业级AI能力平台与知识库，减少重复开发。</p>
                  <p>设定“90天验证 + 180天推广”的双阶段节奏。</p>
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
