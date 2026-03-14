import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import FinalCta from "../sections/FinalCta";

const serviceDeep = [
  {
    title: "AI培训",
    highlight: "高管战略工作坊 + 全员AI技能培养",
    points: [
      "AI趋势与行业对标分析",
      "AI工具与Agent应用实操",
      "企业AI能力评估与提升计划",
      "内部AI推广与组织动员"
    ]
  },
  {
    title: "AI流程优化",
    highlight: "从流程诊断到Agent自动化交付",
    points: [
      "关键流程建模与价值评估",
      "AI Agent设计与业务集成",
      "自动化工作流与监控机制",
      "企业知识库构建与治理"
    ]
  },
  {
    title: "AI战略咨询",
    highlight: "战略层面的AI增长与组织升级",
    points: [
      "AI业务模式创新",
      "企业增长引擎重构",
      "AI驱动客户体验提升",
      "组织能力与治理体系升级"
    ]
  }
];

const serviceCases = [
  {
    stage: "认知唤醒",
    title: "集团高管AI共识工作坊",
    industry: "制造业",
    challenge: "AI认知碎片化，缺少统一战略语言与落地优先级。",
    outcome: "形成AI转型路线图与三大优先场景，启动试点团队。"
  },
  {
    stage: "流程重构",
    title: "订单与供应链协同Agent",
    industry: "商贸流通",
    challenge: "跨部门流程依赖人工协调，响应慢且易出错。",
    outcome: "关键流程自动化率提升45%，异常响应时间缩短60%。"
  },
  {
    stage: "战略跃迁",
    title: "AI驱动的客户增长引擎",
    industry: "能源服务",
    challenge: "存量客户运营效率低，缺乏可复制增长模型。",
    outcome: "客户转化率提升18%，形成可量化的AI增长指标体系。"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>服务 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Services"
            title="企业AI转型全链路服务"
            subtitle="从认知启蒙到AI系统落地，构建可持续竞争优势。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceDeep.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.highlight}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-200">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-ink/80">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Service Outcomes"
            title="三阶方法论下的服务案例"
            subtitle="以认知、流程、战略为主线，形成可复制的AI转型成果。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceCases.map((item) => (
              <div key={item.title} className="card">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>{item.stage}</span>
                  <span>{item.industry}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.challenge}</p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-100">
                  {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

