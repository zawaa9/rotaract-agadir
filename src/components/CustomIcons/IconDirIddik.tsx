import type { FC } from "react";
import dirIddikUrl from "@/assets/dir-iddik.png";

export const IconDirIddik: FC = () => (
  <img
    src={dirIddikUrl.src}
    alt="Dir Iddik"
    style={{ width: "1em", height: "1em", display: "inline-block" }}
  />
);

export default IconDirIddik;
