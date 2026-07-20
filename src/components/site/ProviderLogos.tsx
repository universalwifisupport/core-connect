import React from "react";
import logo2 from "@/assets/2.avif";
import logo3 from "@/assets/3.avif";
import logo4 from "@/assets/4.avif";
import logo5 from "@/assets/5.avif";
import logo6 from "@/assets/6.avif";
import logo7 from "@/assets/7.avif";

export const providers = [
  { name: "att", label: "AT&T" },
  { name: "spectrum", label: "Spectrum" },
  { name: "verizon", label: "Verizon" },
  { name: "cox", label: "Cox" },
  { name: "frontier", label: "Frontier" },
  { name: "comcast", label: "Comcast" },
  { name: "optimum", label: "Optimum" },
];

export function ProviderChip({ label }: { label: string }) {
  let src = "";
  switch (label.toLowerCase()) {
    case "att":
    case "at&t":
      src = logo2;
      break;
    case "spectrum":
      src = logo3;
      break;
    case "verizon":
      src = logo4;
      break;
    case "cox":
      src = logo5;
      break;
    case "frontier":
      src = logo6;
      break;
    case "comcast":
      src = logo7;
      break;
    case "optimum":
      src = logo2;
      break;
    default:
      src = logo2;
  }

  return (
    <div className="flex items-center justify-center px-8 py-3 transition-all hover:scale-105 shrink-0 group">
      <img
        src={src}
        alt={label}
        className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}
