import { categoriesData, quickLinksData } from "@/app/constants/data";
import Link from "next/link";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SubText, SubTitle } from "./ui/text";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText className="text-gray-500 text-sm">
              ค้นพบคอลเลกชันเฟอร์นิเจอร์ที่คัดสรรมาอย่างดีที่ Shopcart
              ผสานสไตล์และความสบาย เพื่อยกระดับพื้นที่อยู่อาศัยของคุณ
            </SubText>
            <SocialMedia
              className="text-darkColor/60 "
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor  text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect text-gray-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect text-gray-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>NewsLetter</SubTitle>
            <SubText className="text-gray-500 text-sm">
              สมัครรับจดหมายข่าวสาร เพื่อไม่พลาดข่าวสารและข้อเสนอสุดพิเศษก่อนใคร
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
