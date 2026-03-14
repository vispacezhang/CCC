import Head from "next/head";
import AssessmentTool from "../sections/AssessmentTool";
import FinalCta from "../sections/FinalCta";

export default function AssessmentPage() {
  return (
    <>
      <Head>
        <title>AI成熟度评估 | CCC AI咨询</title>
      </Head>
      <AssessmentTool />
      <FinalCta />
    </>
  );
}

