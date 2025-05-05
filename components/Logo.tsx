import { cn } from "@/lib/utils";
import Link from "next/link";
const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-2xl tracking-wide uppercase text-shop_dark_green font-black hover:text-shop_light_green transition-colors duration-300",
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
