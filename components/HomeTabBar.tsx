import { productType } from "@/app/constants/data";
import Link from "next/link";

interface Props {
  selectedTab?: string;
  onTabSelct: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelct }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4">
      <div className="flex items-center overflow-x-auto scrollbar-hide w-full sm:w-auto gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold pb-1 sm:pb-0">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelct(item?.title)}
            className={`border border-shop_light_green/30 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full hoverEffect hover:bg-shop_light_green hover:border-shop_light_green hover:text-white whitespace-nowrap
             ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20 "}
              `}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className={`border border-shop_light_green/30 text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full hoverEffect hover:bg-shop_light_green hover:border-shop_light_green hover:text-white whitespace-nowrap`}
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
