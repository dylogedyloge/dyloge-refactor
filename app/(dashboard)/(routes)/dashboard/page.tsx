"use client";

import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import { tools } from "@/constants";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Start creating a masterpiece
        </h2>
        <p className="text-muted-foreground  text-sm md:text-lg text-center">
          Because Even Shakespeare Could Use a Bit of AI-assistance!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-stone-500  flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center justify-between  w-full ">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 w-fit rounded-sm ">
                  <tool.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-semibold prose-stone">{tool.label}</div>
                  <div className="text-sm prose-stone">{tool.description}</div>
                </div>
              </div>

              <div>
                <BsArrowRightShort className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
