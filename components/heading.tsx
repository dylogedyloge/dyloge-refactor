import { Separator } from "@/components/ui/separator";

interface HeadingProps {
  title: string;
  description: string;
  icon: any;
}

export const Heading = ({ title, description, icon: Icon }: HeadingProps) => {
  return (
    <>
      <div className=" lg:px-8 flex items-center gap-x-3">
        <div className="p-2 w-fit rounded-sm">
          <Icon className="w-8 h-8" />
        </div>
        <Separator orientation="vertical" />
        <div>
          <div className="text-xl font-bold ">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </>
  );
};
