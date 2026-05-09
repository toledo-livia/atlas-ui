import { Button } from "./components/button/button";
import { Typography } from "./components/typography/typography";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] p-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[32px] border border-white/50 bg-white/70 p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="space-y-4">
          <Typography variant="label">
            Atlas UI
          </Typography>

          <Typography variant="h1">
            Build modern interfaces faster
          </Typography>

          <Typography variant="body">
            A scalable and reusable design system
            focused on accessibility, consistency
            and modern UI architecture.
          </Typography>
        </div>

        <div className="flex flex-wrap gap-6">
          <Button variant="primary">
            Get Started
          </Button>

          <Button variant="secondary">
            Documentation
          </Button>

          <Button variant="ghost">
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}