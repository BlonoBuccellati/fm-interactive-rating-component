import { cn } from "@/shared/lib/utils";

type PageLayoutProps = {
  className?: string;
};
const PageLayout = ({
  className,
  ...props
}: PageLayoutProps & React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-screen max-w-[327px] items-center",
        className,
      )}
      {...props}
    />
  );
};

export default PageLayout;
