import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import LikeButton from "./like-button";
import Link from "next/link";

function ProductCard({ img, name, price }: Product) {
	return (
		<div className="bg-[#f6f6f6] w-[164px] lg:w-[268px] rounded-lg py-6 px-3 lg:px-4 text-main-black text-center font-sf">
			<div className="flex flex-col items-center gap-y-2 lg:gap-y-4">
				{/* <button
					onClick={() => setLiked(!liked)}
					type="button"
					className="inline-flex ml-auto"
				>
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.93415 18.5443L15.3152 27.3568C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3568L26.0657 18.5443C28.6739 16.0941 28.9907 12.0621 26.797 9.23474L26.3845 8.7031C23.7603 5.32075 18.4928 5.888 16.6488 9.75151C16.3883 10.2973 15.6115 10.2973 15.351 9.75151C13.5071 5.888 8.23955 5.32075 5.61531 8.7031L5.20284 9.23474C3.00918 12.0621 3.32592 16.0941 5.93415 18.5443Z"
							stroke={liked ? "#FF0000" : "#919191"}
							fill={liked ? "#FF0000" : "none"}
							stroke-opacity="0.77"
							strokeWidth="1.4"
						/>
					</svg>
				</button> */}
				<LikeButton key={name} />
				<Image
					src={img}
					alt={name}
					className="max-lg:h-[104px] max-lg:w-[104px]"
				/>
				<Link
					href={`products/${name.split(" ").at(1)}`}
					className="font-medium line-clamp-2 h-12"
				>
					{name}
				</Link>
				<h5 className="max-lg:mt-2 font-semibold text-2xl leading-none tracking-[0.72px]">
					{formatPrice(price)}
				</h5>
				<Button
					className="mt-2 max-lg:px-0 max-lg:w-full"
					variant="fill"
					size="sm"
				>
					Buy Now
				</Button>
			</div>
		</div>
	);
}

export default ProductCard;
