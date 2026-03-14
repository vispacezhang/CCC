import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatText(payload) {
  return [
    `企业名称: ${payload.company || "-"}`,
    `联系人: ${payload.name || "-"}`,
    `职位: ${payload.title || "-"}`,
    `企业邮箱: ${payload.email || "-"}`,
    `关注行业: ${payload.industry || "-"}`,
    "",
    "项目需求:",
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
    return res.status(400).json({ message: "请完整填写联系人、邮箱和项目需求。" });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "zhangliwei.superman@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "CCC AI咨询 <onboarding@resend.dev>";
  const subject = `【CCC AI咨询】新咨询 - ${company || name}`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text: formatText({ company, name, title, email, industry, message }),
      replyTo: email,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    });

    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return res.status(500).json({ message: "邮件发送失败，请稍后再试。" });
  }
}
