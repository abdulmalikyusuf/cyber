import React from "react";
import Image from "next/image";

type AddedProduct = { price: number; label: string; imgSrc: string };

function AddedProduct({ price, label, imgSrc }: AddedProduct) {
	return (
		<div className="bg-[#F6F6F6] rounded-xl flex gap-x-4 items-center p-4 w-[464px]">
			<Image src={imgSrc} width={40} height={40} alt="" className="" />
			<div className="text-main-black flex-1 flex">
				<p className="font-medium flex-1">{label}</p>
				<p className="text-right font-semibold">${price}</p>
			</div>
		</div>
	);
}

export default AddedProduct;
