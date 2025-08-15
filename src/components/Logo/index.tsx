import type { ImgHTMLAttributes } from "react";

export const Logo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src="/logo.png" alt="Logo" {...props} />
);
