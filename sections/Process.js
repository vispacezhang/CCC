import SectionHeader from "../components/SectionHeader";

const phases = [
  {
    title: "诊断评估",
    duration: "1-2周",
    outputs: ["AI转型评估报告", "优先级路线图"]
  },
  {
    title: "试点验证",
    duration: "4-8周",
    outputs: ["AI Agent试点项目", "试点结果报告"]
  },
  {
    title: "全面推广",
    duration: "3-6个月",
    outputs: ["企业AI部署方案"]
  }
];

export default function Process() {
  return (
    <section className="section">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Engagement"
          title="合作流程"
          subtitle="标准化交付流程与量化指标，确保AI转型有序推进。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <div key={phase.title} className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phase 0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{phase.duration}</p>
              <div className="mt-4 space-y-2">
                {phase.outputs.map((output) => (
                  <div key={output} className="flex items-center gap-2 text-sm text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {output}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

