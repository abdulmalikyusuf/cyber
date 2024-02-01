import React, { ReactNode } from "react";
import { Icon as LucideIcon } from "../icons";

function Icon({ children }: { children: ReactNode }) {
	return (
		<div className="flex justify-center items-center p-4 gap-2 bg-[#F6F6F6] rounded-xl h-14 w-14 text-[#797979]">
			{children}
		</div>
	);
}

export default Icon;
