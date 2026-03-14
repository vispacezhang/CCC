import SectionHeader from "../components/SectionHeader";

const industries = [
  { title: "制造业", tag: "MFG" },
  { title: "商贸流通", tag: "TRADE" },
  { title: "农业合作社", tag: "AGRI" },
  { title: "建筑工程", tag: "BUILD" },
  { title: "能源服务", tag: "ENERGY" }
];

export default function Industries() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Industries"
          title="服务行业"
          subtitle="聚焦中国传统产业升级，打造AI可复制模型。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div key={industry.title} className="card flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-xs font-bold tracking-[0.2em] text-accent">
                {industry.tag}
              </div>
              <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
              <p className="text-sm text-slate-200">AI流程优化与智能决策提升。</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

