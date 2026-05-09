import { Button } from "./components/button/button";
import { Input } from "./components/input/input";
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
            Professional Design System focused on
            accessibility, consistency and premium
            UI architecture.
          </Typography>
        </div>

        <div className="grid gap-6">
          <Input
            label="Email"
            placeholder="Enter your email"
            helperText="We'll never share your email."
          />

          <Input
            label="Password"
            placeholder="••••••••"
            error="Password is required"
          />
        </div>

        <div className="flex gap-6">
          <Button variant="primary">
            Continue
          </Button>

          <Button variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </main>
  );
}