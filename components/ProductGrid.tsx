"use client";

import { productType } from "@/app/constants/data";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const query = `*[_type == "product" && variant == $variant ] | order(name desc){
  ...,"categories":categories[]->title
}`;

  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelct={setSelectedTab} />
      {loading ? (
        <div
          className="flex items-center justify-center py-10 min-h-80 gap-4
        w-full mt-10"
        >
          <div className="space-x-2 flex items-center text-shadow-shop_dark_green">
            <Loader2 className="w-5 h-6 animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products?.map((product) => (
            <AnimatePresence key={product?._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
