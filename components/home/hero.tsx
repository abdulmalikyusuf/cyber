import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
	return (
		<section className="bg-hero-gradient">
			<div className="relative mx-4 lg:mx-160 flex flex-wrap items-center justify-center lg:justify-normal gap-y-12 h-[769px] lg:h-[632px] overflow-clip">
				<div className="max-lg:mt-[88px] lg:min-w-[400px] lg:max-w-[714px]">
					<div className="flex flex-col items-center lg:items-start gap-y-4 lg:gap-y-6 text-center lg:text-center">
						<h4 className="font-inter text-main-white/40">
							Pro.Beyond.
						</h4>
						<h1 className="text-7xl lg:text-8xl text-main-white font-extralight -tracking-[0.72px] lg:-tracking-[0.96px]">
							IPhone 14 <span className="font-semibold">Pro</span>
						</h1>
						<p className="text-lg text-[#909090] font-medium">
							Created to change everything for the better. For
							everyone
						</p>
						<Button className="max-lg:mt-4">Shop now</Button>
					</div>
				</div>
				<div className="lg:absolute bottom-0 right-0 lg:z-10 max-lg:px-[11px]">
					<Image
						alt="Iphone Mockup"
						src="/images/Iphone.png"
						className=""
						width={406}
						height={998}
						priority
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
