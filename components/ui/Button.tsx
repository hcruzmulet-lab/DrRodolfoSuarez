import Link from "next/link";

type Props = {
  href?: string; onClick?: () => void; variant?: "primary" | "ghost" | "dark";
  children: React.ReactNode; className?: string; external?: boolean;
};
const styles = {
  primary: "bg-dorado text-tinta hover:bg-dorado-600",
  ghost: "bg-transparent text-azul border border-azul/30 hover:bg-azul/5",
  dark: "bg-azul text-white hover:bg-azul-900",
};
export function Button({ href, onClick, variant = "primary", children, className = "", external }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors min-h-11 ${styles[variant]} ${className}`;
  if (href) return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
