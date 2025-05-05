import { productType } from "@/app/constants/data";
import Link from "next/link";

interface Props {
  selectedTab?: string;
  onTabSelct: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelct }: Props) => {
  console.log("🚀 ~ HomeTabBar ~ selectedTab:", selectedTab);
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-1.5 text-sm">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelct(item?.title)}
            className={`border border-shop_light_green/30 px-4 py-1.5 rounded-full md:px-6 md:py-2 hoverEffect hover:bg-shop_light_green hover:border-shop_light_green hover:text-white
             ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20 "}
              `}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className={`border border-shop_light_green/30 px-4 py-1.5 rounded-full md:px-6 md:py-2 hoverEffect hover:bg-shop_light_green hover:border-shop_light_green hover:text-white `}
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
