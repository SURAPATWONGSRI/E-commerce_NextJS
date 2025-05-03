import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/surapat.wongsri.1/",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/surapat-wongsri/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/SURAPATWONGSRI",
    icon: <Github className="w-5 h-5" />,
  },
];
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green",
                  iconClassName
                )}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor  font-medium",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
