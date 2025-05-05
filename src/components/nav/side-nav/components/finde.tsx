import Link from "next/link";
import { FindeLogo } from "@/components/icons";

export default function Finde() {
  return (
    <Link
      href="https://visactor.io"
      target="_blank"
      className="relative my-2 flex flex-col items-center justify-center gap-y-2 px-4 py-4"
    >
      <div className="dot-matrix absolute left-0 top-0 -z-10 h-full w-full" />
      <span className="text-xs text-muted-foreground">Copyright © 2025</span>
      <div className="flex items-center space-x-2">
        <FindeLogo size={24} />
        <span className="text-md text-accent-foreground">Anonymous</span>
      </div>
    </Link>
  );
}
