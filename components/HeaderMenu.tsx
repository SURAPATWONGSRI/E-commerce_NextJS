"use client";
import { headerData } from "@/app/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-medium text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop_light_green hoverEffect relative group overflow-hidden ${
            pathname === item?.href && "text-shop_light_green"
          }
            `}
        >
          {item.title}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-shop_light_green origin-center transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
