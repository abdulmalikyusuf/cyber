"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Icons } from "../icons";

function CartProduct({ limit = 5 }: { limit?: number }) {
	const [count, setCount] = useState(1);
	const incrementCount = () =>
		setCount((prev) => (prev < limit ? prev + 1 : prev));
	const decrementCount = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
	return (
		<div className="py-4 flex gap-x-4 items-center text-main-black">
			<Image
				src="/images/cart-iphone.png"
				width={90}
				height={90}
				alt=""
				className="flex-1"
			/>
			{/* <div className="flex-1">
			</div> */}
			<div className="flex">
				<div className="flex flex-col gap-y-2 w-fullmax- w-[200px]">
					<p className="font-medium">
						Apple iPhone 14 Pro Max 128Gb Deep Purple
					</p>
					<p className="text-sm leading-6">#25139526913984</p>
				</div>
				<div className="flex items-center gap-x-6">
					<div className="flex items-center gap-x-2">
						<button type="button" className="">
							<Icons.minus
								className="w-6 h-6"
								onClick={decrementCount}
							/>
						</button>
						<p className="py-2 px-4 border-[0.5px] border-[#D9D9D9] rounded-[4px] text-center text-base leading-6 font-medium">
							{count}
						</p>
						<button type="button" className="">
							<Icons.plus
								className="w-6 h-6"
								onClick={incrementCount}
							/>
						</button>
					</div>
					<h5 className="text-xl leading-8 font-medium tracking-[0.6px]">
						$1399
					</h5>
					<button type="button" className="">
						<Icons.close className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartProduct;
