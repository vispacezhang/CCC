import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import Services from "../sections/Services";
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
      <Services />
      <FinalCta />
    </>
  );
}

