import SectionHeader from "../components/SectionHeader";

const industries = [
  {
    title: "传统制造业（中小工厂为主）",
    tag: "制造",
    detail: "质检视觉AI、预测性维护与排程优化。"
  },
  {
    title: "批发 / 零售（中小商家、夫妻店、区域连锁）",
    tag: "批零",
    detail: "选品预测、库存补货与会员营销。"
  },
  {
    title: "餐饮（中小餐馆、奶茶店、连锁加盟店）",
    tag: "餐饮",
    detail: "客流分析、备货优化与评价洞察。"
  },
  {
    title: "建筑 / 工程 / 装修行业",
    tag: "建筑",
    detail: "安全识别、进度预警与成本测算。"
  },
  {
    title: "物流与专线货运（三方物流、专线、车队）",
    tag: "物流",
    detail: "路线规划、装载率优化与异常监控。"
  },
  {
    title: "农业 / 种植养殖",
    tag: "农业",
    detail: "病虫害识别、产量预测与水肥控制。"
  },
  {
    title: "本地生活服务（家政、维修、美业、搬家）",
    tag: "本地",
    detail: "智能派单、需求识别与服务质量监控。"
  },
  {
    title: "教培 / 职业技能（中小机构、工作室）",
    tag: "教培",
    detail: "作业批改、备课生成与流失预警。"
  },
  {
    title: "医疗健康（诊所、体检中心、康复机构）",
    tag: "医疗",
    detail: "智能导诊、影像辅助与随访管理。"
  },
  {
    title: "财税 / 代账 / 小微企业服务",
    tag: "财税",
    detail: "票据识别、自动记账与风险检测。"
  },
  {
    title: "人力资源（中小工厂 / 服务业招聘）",
    tag: "人资",
    detail: "简历筛选、人岗匹配与用工风险识别。"
  },
  {
    title: "物业管理 / 园区运营",
    tag: "物业",
    detail: "智能安防、巡检优化与能耗管理。"
  }
];

export default function Industries() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Industries"
          title="服务行业"
          subtitle="深耕中小传统行业，打造可复制的AI转型方案。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.title} className="card flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-xs font-bold tracking-[0.2em] text-accent">
                {industry.tag}
              </div>
              <h3 className="text-base font-semibold text-white">{industry.title}</h3>
              <p className="text-sm text-slate-200">{industry.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
