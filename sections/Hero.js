import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../components/Button";

const stats = [
  { label: "企业AI项目交付", value: "50+" },
  { label: "平均效率提升", value: "32%" },
  { label: "行业解决方案", value: "8" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="container-pad relative py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="badge">Enterprise AI Transformation</span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            >
              帮助中国企业进入<span className="text-gradient">AI时代</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg text-slate-200"
            >
              CCC AI咨询帮助企业通过AI Agent、流程优化与战略升级打造未来竞争优势。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <PrimaryButton href="/contact">预约AI咨询</PrimaryButton>
              <SecondaryButton href="/services">了解我们的解决方案</SecondaryButton>
            </motion.div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border border-white/15 bg-white/5 shadow-soft" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full rounded-3xl p-8"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI Network Insight</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">现代AI能力图谱</h3>
                <p className="mt-4 text-sm text-slate-300">
                  以数据、流程、智能体与决策为核心，建立企业级AI生产力体系。
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  "多智能体协同系统",
                  "企业知识库与数据资产",
                  "自动化决策与执行",
                  "AI治理与安全架构"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "AI Agent部署", value: "6-12周" },
                  { label: "ROI提升周期", value: "90天" }
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center">
                    <p className="text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

