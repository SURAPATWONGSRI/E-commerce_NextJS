import { banner_1 } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

const HomeBanner = () => {
  return (
    <div
      className="py-16 md:py-0 bg-shop_light_pink rounded-lg
    px-10 lg:px-24 flex items-center justify-between"
    >
      <div className="space-y-5">
        <Title>
          รับส่วนลดสูงสุด 50% <br />
          สำหรับหูฟังที่ร่วมรายการ
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_btn_dark_green text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark_green hoverEffect"
        >
          ซื้อเลย
        </Link>
      </div>

      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
