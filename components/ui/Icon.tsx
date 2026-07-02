const paths: Record<string, React.ReactNode> = {
  check: <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
  whatsapp: <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" strokeLinecap="round" strokeLinejoin="round" />,
  pin: <><path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round"/></>,
  arrow: <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />,
  oido: <path d="M8 15a4 4 0 118 0M6 12a6 6 0 1112 0c0 2-1 3-2.5 4S13 21 12 21" strokeLinecap="round" />,
  nariz: <path d="M14 4v7l2 3a3 3 0 01-3 4H9M11 4v6" strokeLinecap="round" strokeLinejoin="round" />,
  garganta: <path d="M12 3v6a4 4 0 01-4 4M12 9a4 4 0 004 4M9 21h6" strokeLinecap="round" />,
  vertigo: <path d="M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8M9 12a3 3 0 116 0" strokeLinecap="round" />,
  ronquido: <path d="M3 15h8M13 9h5M15 12h4M4 12h4" strokeLinecap="round" />,
  audio: <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" strokeLinecap="round" />,
};
export function Icon({ name, className = "" }: { name: keyof typeof paths | string; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={`h-6 w-6 ${className}`}>{paths[name] ?? paths.check}</svg>;
}
