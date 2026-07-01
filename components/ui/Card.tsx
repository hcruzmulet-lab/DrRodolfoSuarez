export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-azul/10 bg-white p-6 shadow-[0_1px_3px_rgba(17,19,24,0.04)] ${className}`}>{children}</div>;
}
