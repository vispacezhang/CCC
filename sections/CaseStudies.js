import SectionHeader from "../components/SectionHeader";

const cases = [
  {
    title: "AI订单自动处理系统",
    before: "人工处理订单需要4小时。",
    after: "AI Agent自动解析订单并生成报价。",
    result: "处理时间缩短到15分钟。"
  },
  {
    title: "智能库存预测引擎",
    before: "库存预测依赖经验，缺货率高。",
    after: "AI预测模型实时调度补货策略。",
    result: "库存周转率提升27%。"
  },
  {
    title: "供应链异常预警",
    before: "供应链风险反馈滞后。",
    after: "AI Agent监控异常并自动触发预案。",
    result: "异常响应时间降低60%。"
  }
];

export default function CaseStudies() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Case Studies"
          title="企业级AI落地成果"
          subtitle="可量化的效率提升与成本优化，构建长期竞争壁垒。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Before</p>
                  <p>{item.before}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">After</p>
                  <p>{item.after}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Result</p>
                  <p className="text-sm text-white">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

