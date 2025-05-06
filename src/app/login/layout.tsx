import { Gabarito } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/style/globals.css";

const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("flex bg-background font-sans", gabarito.variable)}>
      <main className="flex-1">{children}</main>
    </div>
  )
}
