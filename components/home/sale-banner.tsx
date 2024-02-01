import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import IPhone from "/public/images/banner/iphone-banner.png";
import AppleWatch from "/public/images/banner/apple-watch-banner.png";
import BottomLeft from "/public/images/banner/jbl_jr_310bt_blue 1.png";
import TopLeft from "/public/images/banner/top-left.png";
import TopLeftClosed from "/public/images/banner/top-left-closed.png";

function SaleBanner() {
	return (
		<section className="bg-sale-banner-gradient relative flow-root overflow-clip font-sf text-center text-main-white">
			<div className="absolute top-0 left-56">
				<Image src={TopLeftClosed} alt="Apple Ipad" />
			</div>
			<div className="absolute -top-20 lg:top-1 -left-1/3 lg:left-10 z-10">
				<Image src={TopLeft} alt="Apple Ipad" className="" />
			</div>
			<div className="absolute -bottom-40 lg:bottom-[14px] -left-1/3 lg:left-0">
				<Image src={BottomLeft} alt="Apple Ipad" />
			</div>
			<div className="mx-4 my-[104px] lg:m-0">
				<div className="flex flex-col items-center justify-center lg:h-[448px]">
					<h1 className="text-5xl lg:text-7xl leading-normal lg:leading-none font-extralight -tracking-[0.48] lg:-tracking-[0.72]">
						Big Summer <span className="font-medium">Sale</span>
					</h1>
					<p className="leading-8 text-[#787878]">
						Commodo fames vitae vitae leo mauris in. Eu consequat.
					</p>
					<div className="mt-10">
						<Button>Shop Now</Button>
					</div>
				</div>
			</div>
			<div className="">
				<Image
					src={IPhone}
					alt="Iphone mockup"
					className="absolute lg:top-0 lg:right-0"
				/>
			</div>
			<div className="max-lg:scale-50">
				<Image
					src={AppleWatch}
					alt="Apple watch"
					className="absolute bottom-0 -right-3/4 lg:right-0"
				/>
			</div>
		</section>
	);
}

export default SaleBanner;
