import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import Team from "../sections/Team";
import FinalCta from "../sections/FinalCta";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>团队 | CCC AI咨询</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Leadership"
            title="战略咨询与技术领导团队"
            subtitle="汇聚AI战略、产品、工程与组织转型的跨界专家。"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              "10+年企业数字化转型经验",
              "跨行业AI项目交付",
              "全球AI基础设施与战略视野"
            ].map((item) => (
              <div key={item} className="card">
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
      <FinalCta />
    </>
  );
}

