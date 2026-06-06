//Main Fonts:
//Bebas Neue
//SF Pro Rounded

import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const sfProRounded = LocalFont({
  src: [
    {
      path: "./fonts/sf_pro_rounded/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_rounded/SF-Pro-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_rounded/SF-Pro-Rounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-rounded",
});
