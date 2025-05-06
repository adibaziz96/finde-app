import Container from "@/components/container";
import { TopNav } from "@/components/nav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav title="User" />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
