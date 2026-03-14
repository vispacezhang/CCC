import SectionHeader from "../components/SectionHeader";

const team = [
  {
    name: "张大威",
    role: "CCC AI咨询创始人",
    background: "前字节跳动商业专家",
    expertise: ["AI商业战略", "AI流程优化", "企业AI转型咨询"]
  },
  {
    name: "冯博",
    role: "创始人 & CEO",
    background: "企业AI内训专家",
    expertise: ["企业AI培训", "AI小模型助理定制", "动态环境自主决策"]
  },
  {
    name: "袁宇",
    role: "易知（深圳）人工智能科技有限公司创始人",
    background: "前苹果操作系统软件项目经理",
    expertise: ["AI全栈开发", "AI系统架构设计", "企业AI系统落地"]
  },
  {
    name: "吴晓布",
    role: "深圳市人工智能与机器人研究院",
    background: "技术专家",
    expertise: ["机器人", "人工智能", "边缘计算", "行业知识图谱"]
  },
  {
    name: "Adam Lee",
    role: "Global Advisor",
    background: "Singapore-based AI & Blockchain Expert",
    expertise: ["AI infrastructure", "Blockchain systems", "AI + Web3 integration", "Enterprise technology strategy"]
  }
];

export default function Team() {
  return (
    <section className="section">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Team"
          title="我们的专家团队"
          subtitle="跨行业、跨技术背景的资深顾问与技术合伙人。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="card">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-2 text-sm text-slate-200">{member.role}</p>
                  <p className="text-sm text-slate-400">{member.background}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                  Expert
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.expertise.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

