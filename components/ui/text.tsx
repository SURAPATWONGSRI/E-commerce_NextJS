import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl font-semibold text-shop_dark_green capitalize tracking-wide mb-5",
        className
      )}
    >
      {" "}
      {children}
    </h2>
  );
};

const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-semibold text-gray-900", className)}>
      {" "}
      {children}
    </h3>
  );
};

const SubText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-gray-500 text-sm", className)}>{children}</p>;
};

export { SubText, SubTitle, Title };
