import { headerData } from "@/app/constants/data";
import { useOutSideClick } from "@/app/hooks/index";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutSideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70  shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_dark_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className=" text-white" spanDesign="group-hover:text-wihte" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && "text-shop_light_green"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
