import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="w-full max-w-[620px]">
      <Badge variant="intelligence">
        AI Workspace
      </Badge>

      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
  Build the future with{" "}
  <span className="text-[var(--brand)]">
    intelligent
  </span>{" "}
  workflows.
</h1>

      <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
        Unify your data, automate repetitive work, and turn
        ideas into production-ready solutions from a single
        intelligent workspace.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">
        <Button>
          Start Free Trial
        </Button>

        <Button variant="secondary">
          Live Demo
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
        <span>✓ AI Powered</span>
        <span>✓ Enterprise Ready</span>
        <span>✓ Secure by Design</span>
      </div>
    </div>
  );
}