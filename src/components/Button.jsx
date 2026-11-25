import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className, onClick, variant='default' }) {
//   console.log("className: ", className);

  const base = "cursor-pointer border py-[.3rem] px-2 rounded-sm";

  const variance = {
    default: "bg-slate-400",
    destructive: "bg-red-300 text-red-700",
    muted: "bg-slate-200 text-slate-700 cursor-not-allowed border-slate-300"
  };

//   variance.default
//   variance[default]

  // twMerge, Rule: whatever duplicated property is last, will be the one to be used.

  /*
className Merge Order (last first)
1. className
2. variance
3. base
*/

  return (
    <button
      onClick={() => onClick()}
      disabled={variant == 'muted' ? true : false}
      className={twMerge(base, variance[variant], className)}
    >
      {children || "Button"}
    </button>
  );
}
