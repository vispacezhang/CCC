import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import FinalCta from "../sections/FinalCta";

const cases = [
  {
    title: "视觉质检自动化",
    company: "华东某五金厂",
    industry: "传统制造业",
    before: "人工目检效率低，缺陷漏检率高。",
    after: "AI视觉模型自动识别外观缺陷并生成报告。",
    result: "质检效率提升3倍，返工率下降25%。"
  },
  {
    title: "智能选品与库存补货",
    company: "华南某区域连锁商超",
    industry: "批发 / 零售",
    before: "选品依赖经验，库存周转慢。",
    after: "AI预测销量与区域偏好，自动生成补货建议。",
    result: "滞销库存降低30%，缺货率下降20%。"
  },
  {
    title: "餐饮备货与损耗预测",
    company: "华中某连锁茶饮品牌",
    industry: "餐饮",
    before: "备货凭经验，损耗与断货并存。",
    after: "AI分析客流与天气，动态预测销量。",
    result: "食材损耗降低28%，翻台率提升15%。"
  },
  {
    title: "工地安全行为识别",
    company: "华北某装修工程公司",
    industry: "建筑 / 工程 / 装修",
    before: "安全巡检依赖人工，覆盖不足。",
    after: "AI识别未戴安全帽与违规行为。",
    result: "安全事故率下降40%，巡检效率提升2倍。"
  },
  {
    title: "专线物流智能调度",
    company: "华东某专线车队",
    industry: "物流与专线货运",
    before: "电话调度，装载率偏低。",
    after: "AI优化路线与装载方案，实时监控异常。",
    result: "装载率提升22%，运输成本下降18%。"
  },
  {
    title: "病虫害识别与产量预测",
    company: "云南某水果合作社",
    industry: "农业 / 种植养殖",
    before: "病虫害依赖经验，预警滞后。",
    after: "AI识别叶片病害并预测产量。",
    result: "损失率下降20%，产量预测误差降低30%。"
  },
  {
    title: "智能派单与报价",
    company: "长三角某家政平台",
    industry: "本地生活服务",
    before: "派单靠人工，响应慢。",
    after: "AI匹配师傅并自动生成报价。",
    result: "派单效率提升50%，客户满意度提升18%。"
  },
  {
    title: "教学内容生成与流失预警",
    company: "华南某职业技能机构",
    industry: "教培 / 职业技能",
    before: "备课效率低，学员流失难以预判。",
    after: "AI生成备课内容并监测学习行为。",
    result: "备课时间减少60%，留存率提升12%。"
  },
  {
    title: "智能导诊与随访",
    company: "华东某体检中心",
    industry: "医疗健康",
    before: "导诊与随访依赖人工，效率低。",
    after: "AI结构化病历并自动分诊与提醒。",
    result: "接诊效率提升35%，复诊率提升10%。"
  },
  {
    title: "发票识别与自动记账",
    company: "某代账服务机构",
    industry: "财税 / 代账",
    before: "票据录入耗时，差错率高。",
    after: "AI自动识别发票并完成记账。",
    result: "人工录入时间降低70%，差错率下降50%。"
  },
  {
    title: "简历智能筛选与匹配",
    company: "华北某制造业招聘中心",
    industry: "人力资源",
    before: "筛简历耗时，匹配效率低。",
    after: "AI基于岗位画像自动推荐候选人。",
    result: "筛选效率提升3倍，入职周期缩短30%。"
  },
  {
    title: "园区设施预测性维护",
    company: "某产业园区物业公司",
    industry: "物业管理 / 园区运营",
    before: "报修依赖微信群，故障响应慢。",
    after: "AI预测设备故障并自动派单。",
    result: "故障响应时间缩短40%，能耗下降15%。"
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
            subtitle="覆盖12大传统行业的可复制AI解决方案。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <div key={item.title} className="card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                  </div>
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
