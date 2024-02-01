import React from "react";

import Stars from "./stars";
import type { RatingLevel } from "@/types";

function OverallRating() {
	return (
		<div className="p-8 bg-[#FAFAFA] rounded-3xl flex flex-col gap-y-4 font-sf">
			<h2 className="text-[56px] leading-none font-medium text-center text-main-black">
				4.8
			</h2>
			<p className="text-15 leading-none font-medium text-main-black/30 text-center">
				of 125 reviews
			</p>
			<Stars numberOfStars={4} />
		</div>
	);
}

export default OverallRating;

export function RatingLevel({ grade, value }: RatingLevel) {
	return (
		<>
			<h6 className="text-lg leading-4 font-medium text-main-black">
				{grade}
			</h6>
			<div className="relative flex-1 h-[5px] rounded-2xl bg-[#D9D9D9]">
				<div className="bg-main-orange w-2/3 rounded-2xl h-full" style={{}}/>
			</div>
			<p className="text-main-black/40 leading-none font-medium">
				{value}
			</p>
		</>
	);
}
