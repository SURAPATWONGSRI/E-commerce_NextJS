import { urlFor } from "@/sanity/lib/image";
import { getAllBrands } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title className="text-2xl">Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5 ">
        {brands?.map((brand) => (
          <Link
            href={`/brand/${brand?.slug?.current}`}
            key={brand?._id}
            className="bg-white w-34 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg  hoverEffect "
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brands Logo"
                width={250}
                height={250}
                className="w-32 h-20 object-contain "
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
