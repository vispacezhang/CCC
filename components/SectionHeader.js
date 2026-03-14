export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <span className="badge">{eyebrow}</span>}
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}



