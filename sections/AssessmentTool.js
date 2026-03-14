import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";

const questions = [
  "企业是否有明确的AI战略愿景？",
  "是否建立跨部门AI推进机制？",
  "是否具备可用的数据资产与治理体系？",
  "是否在核心流程中部署AI自动化？",
  "是否拥有AI Agent或智能体应用场景？",
  "是否建立AI项目ROI与KPI指标？",
  "是否具备内部AI人才培养体系？",
  "是否完成关键系统的AI集成？",
  "是否有AI安全与合规治理框架？",
  "是否具备持续优化AI能力的机制？"
];

const recommendations = [
  {
    label: "基础认知阶段",
    range: [0, 20],
    guidance: "建议从AI战略培训与高层共识建立开始，建立AI愿景与组织动员。",
    services: ["AI培训", "AI战略咨询"]
  },
  {
    label: "流程建设阶段",
    range: [21, 35],
    guidance: "建议优先完成关键流程AI化与Agent试点，形成可复制模板。",
    services: ["AI流程优化", "AI Agent试点"]
  },
  {
    label: "战略跃迁阶段",
    range: [36, 50],
    guidance: "建议推动AI全面战略升级，重构商业模式与增长引擎。",
    services: ["AI战略咨询", "企业AI系统落地"]
  }
];

export default function AssessmentTool() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => answers.reduce((sum, value) => sum + value, 0), [answers]);
  const allAnswered = answers.every((value) => value > 0);
  const recommendation = recommendations.find(
    (item) => score >= item.range[0] && score <= item.range[1]
  );

  const handleSubmit = () => {
    if (!allAnswered || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Assessment"
          title="企业AI成熟度评估"
          subtitle="回答10个问题，生成成熟度评分与服务建议。"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question} className="card">
                <p className="text-sm text-slate-200">{index + 1}. {question}</p>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => {
                        const next = [...answers];
                        next[index] = value;
                        setAnswers(next);
                      }}
                      className={`rounded-xl border px-3 py-2 text-sm transition ${
                        answers[index] === value
                          ? "border-accent bg-accent/20 text-white"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">成熟度评分</p>
              <p className="mt-4 text-4xl font-semibold text-white">{score}/50</p>
              <p className="mt-2 text-sm text-slate-300">评分基于企业AI战略、流程与治理能力。</p>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {recommendation ? (
                  <>
                    <p className="font-semibold text-white">{recommendation.label}</p>
                    <p className="mt-2">{recommendation.guidance}</p>
                  </>
                ) : (
                  <p>完成所有问题即可生成建议。</p>
                )}
              </div>
            </div>
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">获取完整报告</p>
              <p className="mt-3 text-sm text-slate-200">请输入企业邮箱，解锁完整评估结果与定制建议。</p>
              <input
                className="input mt-4"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="cta-primary mt-4 w-full"
                disabled={!allAnswered || !email}
              >
                生成评估报告
              </button>
              {!submitted && (
                <p className="mt-3 text-xs text-slate-400">提交邮箱后可查看完整报告与服务建议。</p>
              )}
              {submitted && recommendation && (
                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">推荐服务</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {recommendation.services.map((service) => (
                      <span key={service} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {service}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4">我们的顾问将与您沟通下一步AI转型计划。</p>
                </div>
              )}
            </div>
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">评分说明</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>1-2：AI意识阶段，需要战略与基础能力建设。</li>
                <li>3：流程探索阶段，可进入试点与优化。</li>
                <li>4-5：战略驱动阶段，适合全面AI升级。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

