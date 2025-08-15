import { IconRotary } from "@/components/CustomIcons/IconRotary";
import { IconDirIddik } from "@/components/CustomIcons/IconDirIddik";
import type { SocialType } from "@/schemas/utils";
import type { FC } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa6";

type SocialsLevel = "primary" | "secondary";

const SOCIALS: Array<{
  icon: FC;
  label: string;
  href: string;
  level: SocialsLevel;
}> = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rotaractagadir/",
    icon: FaInstagram,
    level: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rotaract-agadir/",
    icon: FaLinkedin,
    level: "primary",
  },
  {
    label: "Rotary",
    href: "https://my.rotary.org/en/club/23c4b3ec-a9c5-42c4-9e13-e50b486fd7c3/details",
    icon: IconRotary,
    level: "primary",
  },
  {
    label: "Dir Iddik",
    href: "https://diriddik.ma/fr/associations/rotaract-agadir-atlantique",
    icon: IconDirIddik,
    level: "primary",
  },
  {
    label: "E-mail",
    href: "mailto:contact@rotaractagadir.com",
    icon: FaEnvelope,
    level: "primary",
  },
];

export function getSocialsItems(level?: SocialsLevel) {
  if (!level) return SOCIALS;
  return SOCIALS.filter((item) => item.level === level);
}

export const SOCIALS_TYPE_MAP = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  // Keep other mappings available for existing content types
  // without rendering them in the site-wide socials list.
  x: (() => null) as unknown as FC,
  github: (() => null) as unknown as FC,
  bluesky: (() => null) as unknown as FC,
  facebook: (() => null) as unknown as FC,
} satisfies Record<SocialType, FC>;
