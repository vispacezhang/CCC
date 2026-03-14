import SectionHeader from "../components/SectionHeader";

const cases = [
  {
    title: "制造业视觉质检Agent",
    before: "质检依赖人工目检，误判与漏检频繁。",
    after: "AI视觉模型自动识别缺陷并生成质检报告。",
    result: "质检效率提升3倍，缺陷漏检率下降70%。"
  },
  {
    title: "餐饮智能备货与损耗预测",
    before: "门店备货靠经验，损耗高且断货频繁。",
    after: "AI预测客流与销量，自动生成备货建议。",
    result: "食材损耗降低28%，缺货率下降35%。"
  },
  {
    title: "物流专线智能调度",
    before: "电话与微信群调度，装载率低。",
    after: "AI优化路线与装载方案，实时监控异常。",
    result: "装载率提升22%，运输成本下降18%。"
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
