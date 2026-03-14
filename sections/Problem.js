import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const problems = [
  {
    title: "认知滞后",
    description: "很多企业仍然将AI理解为工具，而不是新一代生产力。"
  },
  {
    title: "流程低效",
    description: "企业流程高度依赖人工经验，难以规模化复制。"
  },
  {
    title: "战略模糊",
    description: "缺乏清晰的AI转型路径与能力建设路线。"
  }
];

export default function Problem() {
  return (
    <section className="section">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Why Now"
          title="传统企业正在面临AI转型挑战"
          subtitle="AI不只是工具升级，而是组织能力的再定义。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

