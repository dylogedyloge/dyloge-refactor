interface HeadingProps {
  title: string;

  icon: any;
}

export const Heading = ({ title, icon: Icon }: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className="p-2 w-fit rounded-sm">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold ">{title}</h2>
        </div>
      </div>
    </>
  );
};
