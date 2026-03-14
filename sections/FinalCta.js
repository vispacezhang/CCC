import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="section bg-ink/80">
      <div className="container-pad">
        <div className="card flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">开启您的AI转型之旅</h2>
            <p className="mt-3 text-sm text-slate-200">预约AI咨询，获取企业级AI战略与落地方案。</p>
            <p className="mt-2 text-sm text-slate-400">seaai@example.com</p>
          </div>
          <Link href="/contact" className="cta-primary">
            预约AI咨询
          </Link>
        </div>
      </div>
    </section>
  );
}

