import logo from "@/public/assets/vicand-logo.svg";
import Image from "next/image";
import { navMenus } from "../constants/navMenus";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiAccountCircle, mdiMagnify, mdiShoppingOutline } from "@mdi/js";

function LandingPageNav() {
  return (
    <nav className="flex items-center justify-between h-20 px-24">
      <Link href="/">
        <Image src={logo} width={121} height={24} alt="Vicand Logo" />
      </Link>
      <div className="flex items-center gap-10">
        {navMenus.map((menu) => {
          return (
            <Link href={menu.path} key={menu.path}>
              {menu.label}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-5">
        <Icon path={mdiMagnify} size={1} />
        <Icon path={mdiAccountCircle} size={1} />
        <Icon path={mdiShoppingOutline} size={1} />
      </div>
    </nav>
  );
}

export default LandingPageNav;
