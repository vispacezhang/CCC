import Head from "next/head";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function ContactPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    title: "",
    email: "",
    industry: "����ҵ",
    message: ""
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "�����ύ..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "�ύʧ�ܣ����Ժ����ԡ�");
      }

      setStatus({ state: "success", message: "�ύ�ɹ������ǽ�������ϵ����" });
      setForm({
        company: "",
        name: "",
        title: "",
        email: "",
        industry: "����ҵ",
        message: ""
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error?.message || "�ύʧ�ܣ����Ժ����ԡ�"
      });
    }
  };

  const canSubmit = form.name && form.email && form.message && status.state !== "loading";

  return (
    <>
      <Head>
        <title>��ϵ | CCC AI��ѯ</title>
      </Head>
      <section className="section">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Contact"
            title="ԤԼAI��ѯ"
            subtitle="�ύ�������ǽ���1������������ϵ����"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="card space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-slate-300">��ҵ����</label>
                <input
                  className="input mt-2"
                  placeholder="��˾����"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-300">��ϵ��</label>
                  <input
                    className="input mt-2"
                    placeholder="����"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300">ְλ</label>
                  <input
                    className="input mt-2"
                    placeholder="ְλ"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">��ҵ����</label>
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
                <label className="text-sm text-slate-300">��ע��ҵ</label>
                <select className="select mt-2" name="industry" value={form.industry} onChange={handleChange}>
                  <option>����ҵ</option>
                  <option>��ó��ͨ</option>
                  <option>ũҵ������</option>
                  <option>��������</option>
                  <option>��Դ����</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300">��Ŀ����</label>
                <textarea
                  className="input mt-2 min-h-[120px]"
                  placeholder="����AIת��Ŀ����ʹ��"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="cta-primary w-full" disabled={!canSubmit}>
                {status.state === "loading" ? "�ύ��..." : "�ύԤԼ"}
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
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">��ϵ��Ϣ</p>
                <p className="mt-4 text-lg text-white">zhangliwei.superman@gmail.com</p>
                <p className="mt-2 text-sm text-slate-300">���Ƿ������й�����������ҵ�ͻ���</p>
              </div>
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">�����ŵ</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li>�߹ܼ�ս�������·��ͼ���</li>
                  <li>AI Agent�Ե���ҵ��ջ�����</li>
                  <li>��ҵ��AI��������տ���</li>
                </ul>
              </div>
              <div className="card">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">�칫�ص�</p>
                <p className="mt-3 text-sm text-slate-200">�Ϻ� | ���� | �¼���</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
