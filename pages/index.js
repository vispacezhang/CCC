import Head from "next/head";
import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Services from "../sections/Services";
import Methodology from "../sections/Methodology";
import CaseStudies from "../sections/CaseStudies";
import Process from "../sections/Process";
import Industries from "../sections/Industries";
import Team from "../sections/Team";
import Blog from "../sections/Blog";
import AssessmentTool from "../sections/AssessmentTool";
import FinalCta from "../sections/FinalCta";

export default function Home() {
  return (
    <>
      <Head>
        <title>CCC AI咨询 | 企业AI转型与AI Agent战略咨询</title>
        <meta
          name="description"
          content="CCC AI咨询帮助中国传统企业通过AI Agent、流程优化与战略升级打造未来竞争优势。"
        />
      </Head>
      <Hero />
      <Problem />
      <Services />
      <Methodology />
      <CaseStudies />
      <Process />
      <Industries />
      <Team />
      <Blog />
      <AssessmentTool />
      <FinalCta />
    </>
  );
}

