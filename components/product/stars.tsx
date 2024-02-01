import React from "react";

import { Icons } from "../icons";
import { cn } from "@/lib/utils";

function Stars({ numberOfStars }: { numberOfStars: number }) {
	const rating =
		numberOfStars > 5 ? 5 : numberOfStars < 0 ? 0 : numberOfStars;
	return (
		<div className="flex">
			{Array.from({ length: 5 }).map((i, idx) => (
				<Icons.star
					key={idx}
					className={cn(
						"stroke-main-orange",
						idx + 2 < rating && "fill-main-orange"
					)}
					size={24}
				/>
			))}
		</div>
	);
}

export default Stars;
