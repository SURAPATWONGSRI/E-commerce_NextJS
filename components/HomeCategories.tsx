import { Category } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white my-12 md:my-16">
      <Title className="font-semibold text-xl mb-8">Popular Categories</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <Link
            key={category?._id}
            href={`/category/${category?.slug?.current}`}
            className="group flex items-center gap-4 p-3 transition-all duration-300 hover:translate-x-1"
          >
            {category?.image && (
              <div className="w-16 h-16 overflow-hidden">
                <Image
                  src={urlFor(category?.image).url()}
                  alt={category?.title || "Category"}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            )}
            <div>
              <h3 className="text-base text-gray-700 capitalize group-hover:text-shop_dark_green transition-colors">
                {category?.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {category?.productCount} items
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
