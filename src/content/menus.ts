import type { FC, ReactNode } from "react";
import { MdHomeFilled, MdInfo, MdPeople, MdImage } from "react-icons/md";

type MainMenuScope = "all" | "mobile" | "desktop";
type MainMenuLevel = "primary" | "secondary";

const MAIN_MENU: Array<{
  icon: FC;
  label: ReactNode;
  href: string;
  exact?: boolean;
  scope: MainMenuScope;
  level: MainMenuLevel;
}> = [
  {
    label: "Home",
    href: "/",
    exact: true,
    icon: MdHomeFilled,
    scope: "mobile",
    level: "primary",
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: MdImage,
    scope: "all",
    level: "primary",
  },
  {
    label: "Team",
    href: "/team",
    icon: MdPeople,
    scope: "all",
    level: "primary",
  },
  {
    label: "About Us",
    href: "/about",
    icon: MdInfo,
    scope: "all",
    level: "primary",
  },
];

export function getMainMenuMobileItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === "all" || item.scope === "mobile") && item.level === level,
  );
}

export function getMainMenuDesktopItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === "all" || item.scope === "desktop") &&
      item.level === level,
  );
}

export function getMainMenuItems() {
  return MAIN_MENU;
}
