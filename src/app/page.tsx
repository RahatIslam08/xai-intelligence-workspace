import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <Container>
        <SectionTitle
          eyebrow="AI Workspace"
          title="Build with reusable UI components."
          description="Our design system is now ready to power the entire Xai experience."
        />

        <div className="mt-10 flex gap-3 flex-wrap">
          <Badge>Brand</Badge>
          <Badge variant="data">Data</Badge>
          <Badge variant="intelligence">Intelligence</Badge>
          <Badge variant="automation">Automation</Badge>
        </div>

        <div className="mt-10">
          <Card>
            <h3 className="text-xl font-semibold">
              Foundation Complete
            </h3>

            <p className="mt-3 text-[var(--text-secondary)]">
              We now have reusable UI components that we'll use across the
              entire Xai application.
            </p>

            <div className="mt-6">
              <Button>Get Started</Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}