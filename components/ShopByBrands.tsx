import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over ฿1,000",
    icon: <Truck size={40} strokeWidth={1.5} />,
  },
  {
    title: "Easy Returns",
    description: "Free return within 30 days",
    icon: <GitCompareArrows size={40} strokeWidth={1.5} />,
  },
  {
    title: "24/7 Support",
    description: "Customer support anytime",
    icon: <Headset size={40} strokeWidth={1.5} />,
  },
  {
    title: "Secure Purchase",
    description: "100% money back guarantee",
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-6 lg:p-10 rounded-md shadow-sm">
      <div className="flex items-center justify-between mb-8 border-b border-muted-foreground/10 pb-3">
        <Title className="text-2xl tracking-wide">Shop by Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-medium text-gray-600 hover:text-shop_btn_dark_green transition-colors duration-300 hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {brands?.map((brand) => (
          <Link
            href={`/brand/${brand?.slug?.current}`}
            key={brand?._id}
            className="bg-white w-full h-24 flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brands Logo"
                width={250}
                height={250}
                className="w-28 h-18 object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 border-t border-gray-100 pt-10">
        {extraData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 group transition-colors duration-300"
          >
            <span className="inline-flex text-gray-400 group-hover:text-shop_light_green transition-all duration-300">
              {item?.icon}
            </span>
            <div className="text-sm">
              <p className="text-gray-800 font-medium mb-0.5">{item?.title}</p>
              <p className="text-gray-500 text-[13px]">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
