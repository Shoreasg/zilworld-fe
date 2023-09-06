import { Lato, Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-jakarta-sans",
    style: ["normal", "italic"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    display: "auto",
    subsets: ['latin']
   
  });
  
  export const lato = Lato({
    variable: "--font-lato",
    weight: ["400", "700"],
    subsets: ['latin']
  });