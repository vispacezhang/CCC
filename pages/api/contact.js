import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatText(payload) {
  return [
    `��ҵ����: ${payload.company || "-"}`,
    `��ϵ��: ${payload.name || "-"}`,
    `ְλ: ${payload.title || "-"}`,
    `��ҵ����: ${payload.email || "-"}`,
    `��ע��ҵ: ${payload.industry || "-"}`,
    "",
    "��Ŀ����:",
    payload.message || "-"
  ].join("\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: "RESEND_API_KEY is not configured." });
  }

  const { company, name, title, email, industry, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "��������д��ϵ�ˡ��������Ŀ����" });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "zhangliwei.superman@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "CCC AI��ѯ <onboarding@resend.dev>";
  const subject = `��CCC AI��ѯ������ѯ - ${company || name}`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text: formatText({ company, name, title, email, industry, message }),
      replyTo: email
    });

    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return res.status(500).json({ message: "�ʼ�����ʧ�ܣ����Ժ����ԡ�" });
  }
}
