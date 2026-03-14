import SectionHeader from "../components/SectionHeader";

const stages = [
  {
    title: "认知唤醒",
    description: "通过培训和咨询帮助企业理解AI Agent是下一代生产力。"
  },
  {
    title: "流程重构",
    description: "重新设计企业流程，让AI参与决策和执行。"
  },
  {
    title: "战略跃迁",
    description: "利用AI重构企业增长模式。"
  }
];

export default function Methodology() {
  return (
    <section className="section">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Methodology"
          title="CCC三阶赋能模型"
          subtitle="三阶方法论驱动AI从认知到战略落地。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <div key={stage.title} className="card relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/20 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">阶段 0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{stage.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{stage.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">交付要点</p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <p>跨部门协作与高管牵引，确保AI战略落地。</p>
              <p>建立数据资产、流程模型、Agent能力库与治理体系。</p>
              <p>结合业务KPI持续迭代，形成可复制的AI增长引擎。</p>
            </div>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">价值输出</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                "AI转型蓝图与路线图",
                "高价值场景与收益评估",
                "组织AI能力建设计划",
                "企业级AI治理框架"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

