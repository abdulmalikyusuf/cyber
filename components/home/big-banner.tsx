import React from "react";
import { Button } from "../ui/button";
import { banner } from "@/config/home";
import { cn } from "@/lib/utils";
import Image from "next/image";

function BigBanner() {
	return (
		<section className="font-sf text-main-black">
			<div className="flex flex-wrap">
				{banner.map(({ description, img, title }, i) => (
					<div
						key={title}
						className={cn(
							"relative px-8 py-14 w-[360px] h-[640px]",
							"first:bg-main-white last:bg-[#2C2C2C] last:text-main-white",
							i === 1 && "bg-[#F9F9F9]",
							i === 2 && "bg-[#EAEAEA]"
						)}
					>
						<div className="">
							{Array.isArray(img) ? (
								img.map((image, i) => (
									<>
										<Image
											key={description}
											src={image}
											alt={description}
											className={cn(
												"top-0 absolute",
												i === 1 && "right-0 top-3"
											)}
										/>
									</>
								))
							) : (
								<Image
									src={img}
									alt={description}
									className="absolute last:right-0 last:top2 top-0"
								/>
							)}
						</div>
						<div className="absolute bottom-14">
							<div className="flex flex-col gap-y-4">
								<h4 className="font-thin text-34 leading-normal">
									{title}
								</h4>
								<p className="text-[#909090] text-sm leading-6 font-medium">
									{description}
								</p>
								{i === 3 ? (
									<Button>Shop Now</Button>
								) : (
									<Button variant="outline">Shop Now</Button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default BigBanner;
