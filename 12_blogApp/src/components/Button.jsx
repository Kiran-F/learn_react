import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#00E5FF]",
    textColor = "text-black",
    className = "",
    ...props
}) {
    return (
        <button className={`px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}