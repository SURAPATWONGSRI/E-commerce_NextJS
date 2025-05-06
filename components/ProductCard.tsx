import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import PriceView from "./PriceView";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-1 rounded-lg bg-white group hover:shadow-sm transition-all duration-300">
      <div className="relative group overflow-hidden bg-gray-50  rounded-lg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="productImage"
            width={700}
            height={700}
            priority
            className={`w-full h-56 sm:h-64 object-contain overflow-hidden transition-all duration-300
              ${product?.stock !== 0 ? "group-hover:scale-[1.03]" : "opacity-60"}`}
          />
        )}
        <AddToWishlistButton product={product} />
        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-sm bg-rose-600/80 text-white font-medium tracking-wide uppercase">
            Sale
          </p>
        )}
        {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-sm bg-blue-600/80 text-white font-medium tracking-wide uppercase">
            New
          </p>
        )}
        {product?.status === "hot" && (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-sm bg-amber-500/80 text-white font-medium tracking-wide uppercase">
            Hot
          </span>
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col gap-1 sm:gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-[10px] sm:text-xs text-gray-400">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}
        <p className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-1 hover:text-gray-600 transition-colors">
          {product?.name}
        </p>

        <div className="flex items-center gap-1">
          <div className="flex items-center px-1.5 py-0.5 bg-gray-50 rounded-sm">
            <StarIcon size={10} className="text-amber-400 fill-amber-400" />
            <span className="ml-0.5 text-[9px] sm:text-[10px] text-gray-600 font-medium">
              4.5
            </span>
          </div>
          {/* <span className="text-[9px] sm:text-[10px] text-gray-400">
            ({Math.floor(Math.random() * 50) + 5})
          </span> */}
        </div>

        <div className="mt-1 sm:mt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <PriceView
              price={product?.price}
              discount={product?.discount}
              className="text-xs sm:text-sm font-medium text-gray-800"
            />

            {(product?.stock as number) > 0 ? (
              <span className="text-[10px] text-gray-500">Available</span>
            ) : (
              <span className="text-[10px] text-gray-400">Out of Stock</span>
            )}
          </div>

          <AddToCartButton
            product={product}
            className="rounded-md w-full mt-1 text-xs sm:text-sm py-1.5 border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
