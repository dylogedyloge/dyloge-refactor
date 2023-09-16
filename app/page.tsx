import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl">
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </div>
  );
}
