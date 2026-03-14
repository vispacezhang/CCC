import SectionHeader from "../components/SectionHeader";

const services = [
  {
    title: "AI培训",
    description: "帮助企业管理层和员工理解AI趋势与工具。",
    items: ["AI趋势解析", "AI工具培训", "AI Agent概念", "企业AI能力建设"]
  },
  {
    title: "AI流程优化",
    description: "通过AI Agent和自动化工作流优化企业运营。",
    items: ["企业流程分析", "AI Agent设计", "自动化工作流", "企业知识库", "系统集成"]
  },
  {
    title: "AI战略咨询",
    description: "帮助企业将AI能力融入商业战略。",
    items: ["AI商业模式设计", "AI增长引擎重构", "AI客户体验升级", "AI组织能力建设"]
  }
];

export default function Services() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Core Services"
          title="我们的核心服务"
          subtitle="从认知到流程到战略，形成企业AI能力闭环。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

