import { Button } from "./Button";
import { Icon } from "./Icon";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppButton({ message, variant = "primary", children, className }:
  { message?: string; variant?: "primary" | "ghost" | "dark"; children: React.ReactNode; className?: string }) {
  return (
    <Button href={waLink(message)} external variant={variant} className={className}>
      <Icon name="whatsapp" className="h-4 w-4" />{children}
    </Button>
  );
}
