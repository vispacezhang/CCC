import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import FinalCta from "../sections/FinalCta";

const cases = [
  {
    title: "AI订单自动处理系统",
    industry: "制造业",
    before: "人工处理订单需要4小时。",
    after: "AI Agent自动解析订单并生成报价。",
    result: "处理时间缩短到15分钟。"
  },
  {
    title: "智能库存预测引擎",
    industry: "商贸流通",
    before: "库存预测依赖经验，缺货率高。",
    after: "AI预测模型实时调度补货策略。",
    result: "库存周转率提升27%。"
  },
  {
    title: "供应链异常预警",
    industry: "物流",
    before: "供应链风险反馈滞后。",
    after: "AI Agent监控异常并自动触发预案。",
    result: "异常响应时间降低60%。"
  },
  {
    title: "工程项目智能调度",
    industry: "建筑工程",
    before: "项目进度依赖人工排程。",
    after: "AI Agent优化排程与资源匹配。",
    result: "项目延误率降低35%。"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>案例 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Case Studies"
            title="企业AI落地案例"
            subtitle="将AI能力嵌入核心流程，形成可验证的业务回报。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <div key={item.title} className="card">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {item.industry}
                  </span>
                </div>
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
      <FinalCta />
    </>
  );
}

