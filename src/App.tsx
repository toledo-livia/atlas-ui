import { Button } from "./components/button/button";
import "./App.css";

export default function App() {
  return (
    <main className="app-shell">
      <div className="panel">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>
        <Button loading>Loading</Button>
      </div>
    </main>
  );
}
