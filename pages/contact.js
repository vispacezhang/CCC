import Head from "next/head";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const industries = [
  "传统制造业（中小工厂为主）",
  "批发 / 零售（中小商家、夫妻店、区域连锁）",
  "餐饮（中小餐馆、奶茶店、连锁加盟店）",
  "建筑 / 工程 / 装修行业",
  "物流与专线货运（三方物流、专线、车队）",
  "农业 / 种植养殖",
  "本地生活服务（家政、维修、美业、搬家）",
  "教培 / 职业技能（中小机构、工作室）",
  "医疗健康（诊所、体检中心、康复机构）",
  "财税 / 代账 / 小微企业服务",
  "人力资源（中小工厂 / 服务业招聘）",
  "物业管理 / 园区运营",
  "其他"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    title: "",
    email: "",
    industry: industries[0],
    message: ""
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "正在提交..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "提交失败，请稍后再试。");
      }

      setStatus({ state: "success", message: "提交成功，我们将尽快联系您。" });
      setForm({
        company: "",
        name: "",
        title: "",
        email: "",
        industry: industries[0],
        message: ""
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error?.message || "提交失败，请稍后再试。"
      });
    }
  };

  const canSubmit = form.name && form.email && form.message && status.state !== "loading";

  return (
    <>
      <Head>
        <title>联系 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Contact"
            title="预约AI咨询"
            subtitle="提交需求，我们将在1个工作日内联系您。"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="card space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-slate-300">企业名称</label>
                <input
                  className="input mt-2"
                  placeholder="公司名称"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-300">联系人</label>
                  <input
                    className="input mt-2"
                    placeholder="姓名"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300">职位</label>
                  <input
                    className="input mt-2"
                    placeholder="职位"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">企业邮箱</label>
                <input
                  className="input mt-2"
                  placeholder="name@company.com"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">关注行业</label>
                <select
                  className="select mt-2"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                >
                  {industries.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300">项目需求</label>
                <textarea
                  className="input mt-2 min-h-[120px]"
                  placeholder="描述AI转型目标与痛点"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="cta-primary w-full" disabled={!canSubmit}>
                {status.state === "loading" ? "提交中..." : "提交预约"}
              </button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.state === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
            <div className="space-y-6">
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">联系信息</p>
                <p className="mt-4 text-lg text-white">zhangliwei.superman@gmail.com</p>
                <p className="mt-2 text-sm text-slate-300">我们服务于中国及东南亚企业客户。</p>
              </div>
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">服务承诺</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li>高管级战略诊断与路线图输出</li>
                  <li>AI Agent试点与业务闭环交付</li>
                  <li>企业级AI治理与风险控制</li>
                </ul>
              </div>
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">办公地点</p>
                <p className="mt-3 text-sm text-slate-200">上海 | 深圳 | 新加坡</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
