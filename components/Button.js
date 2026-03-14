import Link from "next/link";

export function PrimaryButton({ href, children }) {
  return (
    <Link href={href} className="cta-primary">
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }) {
  return (
    <Link href={href} className="cta-secondary">
      {children}
    </Link>
  );
}



