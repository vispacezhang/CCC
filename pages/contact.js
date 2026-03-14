import Head from "next/head";
import SectionHeader from "../components/SectionHeader";

export default function ContactPage() {
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
            <form className="card space-y-4">
              <div>
                <label className="text-sm text-slate-300">企业名称</label>
                <input className="input mt-2" placeholder="公司名称" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-300">联系人</label>
                  <input className="input mt-2" placeholder="姓名" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">职位</label>
                  <input className="input mt-2" placeholder="职位" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">企业邮箱</label>
                <input className="input mt-2" placeholder="name@company.com" type="email" />
              </div>
              <div>
                <label className="text-sm text-slate-300">关注行业</label>
                <select className="select mt-2">
                  <option>制造业</option>
                  <option>商贸流通</option>
                  <option>农业合作社</option>
                  <option>建筑工程</option>
                  <option>能源服务</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300">项目需求</label>
                <textarea className="input mt-2 min-h-[120px]" placeholder="描述AI转型目标与痛点" />
              </div>
              <button type="submit" className="cta-primary w-full">
                提交预约
              </button>
            </form>
            <div className="space-y-6">
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">联系信息</p>
                <p className="mt-4 text-lg text-white">seaai@example.com</p>
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

