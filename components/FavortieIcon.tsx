import { Heart } from "lucide-react";
import Link from "next/link";

const FavortieIcon = () => {
  return (
    <Link href={"/favorite"} className="relative group">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3 w-3 rounded-full text-[0.6rem] flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default FavortieIcon;
