import { featuredProducts } from "@/config/product-list";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Banner() {
	return (
		<section className="lg:grid lg:grid-cols-4 lg:grid-rows-2">
			{featuredProducts.map((product, idx) => (
				<div
					key={product.imgSrc}
					className={cn(
						"bg-[#EDEDED] py-10 px-4 w-[375px]aspect-square font-sf",
						idx === 1 && "bg-[#353535]",
						idx === 2 &&
							"bg-main-white lg:col-span-2 lg:col-start-1 lg:row-start-1",
						"last:col-span-2 last:row-span-2 last:col-start-3 last:row-start-1",
						""
					)}
				>
					<div className="lg:relative flex flex-col lg:flex-row justify-center lg:justify-normal items-center gap-y-6 text-center">
						<div className="lg:absolute">
							{/* // TODO: After implementing the API call, change the image height and width to be feed from the API response */}
							<Image
								src={product.imgSrc}
								alt={product.title}
								width={product.imgWidth}
								height={product.imgHeight}
								className=""
							/>
						</div>
						<div className="flex flex-col gap-y-2">
							<h3
								className={`${idx === 1 && "text-main-white"}
									!text-34 leading-10 text-main-black font-light`}
							>
								{product.title
									.split(" ")
									.slice(0, -1)
									.join(" ")}{" "}
								<span className="font-bold">
									{product.title.split(" ").at(-1)}
								</span>
							</h3>
							<p className="font-medium text-[#909090]">
								{product.description}
							</p>
						</div>
						{idx === 3 && (
							<Button className="w-full" variant="outline">
								Shop Now
							</Button>
						)}
					</div>
				</div>
			))}
			{/* <div className="py-10 px-4 bg-[#EDEDED] w-[375px]aspect-square font-sf">
				<div className="flex flex-col justify-center items-center gap-y-6 text-center">
					<Image
						src="/images/apple-airpods-max.png"
						alt=""
						width={192}
						height={200}
						className=""
					/>
					<div className="flex flex-col gap-y-2">
						<h3 className="text-34 leading-10 text-main-black font-light">
							Apple Airpods <span className="font-bold">Max</span>
						</h3>
						<p className="font-medium text-[#909090]">
							Computational audio. Listen, it&apos;s powerful
						</p>
					</div>
				</div>
			</div>
			<div className="py-10 px-4 bg-[#353535] w-[375px]aspect-square font-sf">
				<div className="flex flex-col justify-center items-center gap-y-6 text-center">
					<Image
						src="/images/apple-vision-pro.png"
						alt=""
						width={326}
						height={192}
						className=""
					/>
					<div className="flex flex-col gap-y-2">
						<h3 className="text-34 leading-10 text-main-white font-light">
							Apple Vision <span className="font-bold">Pro</span>
						</h3>
						<p className="font-medium text-[#909090]">
							An immersive way to experience entertainment
						</p>
					</div>
				</div>
			</div>
			<div className="py-10 px-4 bg-main-white w-[375px]aspect-square font-sf">
				<div className="flex flex-col justify-center items-center gap-y-6 text-center">
					<Image
						src="/images/play-station.png"
						alt=""
						width={200}
						height={200}
						className=""
					/>
					<div className="flex flex-col gap-y-2">
						<h3 className="text-34 leading-10 text-main-black font-light">
							Playstation <span className="font-bold">5</span>
						</h3>
						<p className="font-medium text-[#909090]">
							Incredibly powerful CPUs, GPUs, and an SSD with
							integrated I/O will redefine your PlayStation
							experience.
						</p>
					</div>
				</div>
			</div>
			<div className="py-10 px-4 bg-[#EDEDED] w-[375px]aspect-square font-sf">
				<div className="flex flex-col justify-center items-center gap-y-6 text-center">
					<Image
						src="/images/MacBook-Pro-14.png"
						alt=""
						width={330}
						height={200}
						className=""
					/>
					<div className="flex flex-col gap-y-2">
						<h3 className="text-34 leading-10 text-main-black font-light">
							Macbook <span className="font-bold">Air</span>
						</h3>
						<p className="font-medium text-[#909090]">
							The new 15‑inch MacBook Air makes room for more of
							what you love with a spacious Liquid Retina display.
						</p>
					</div>
				</div>
			</div> */}
		</section>
	);
}

export default Banner;
