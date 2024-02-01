import React from "react";
import Image from "next/image";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tab } from "@/components/ui/tab";
import OverallRating, { RatingLevel } from "@/components/product/rating";
import CommentList from "@/components/product/comments";
import RelatedProducts from "@/components/product/related-products";

function Page({ slug }: { slug: string }) {
	const detail = [{}];
	const features = [
		{ icon: Icons.deliveryTruck, title: "Free delivery", value: "1-2 day" },
		{ icon: Icons.store, title: "In Stock", value: "Today" },
		{ icon: Icons.badge, title: "Guaranteed", value: "1 year" },
	];
	return (
		<div>
			<div className="my-28 mx-40 font-sf text-main-black bg-main-white">
				<div className="flex items-center gap-x-12">
					<div className="flex flex-col gap-y-6"></div>
					<div className="w- h-">
						{/* <Image src={} alt="" className="" /> */}
					</div>
				</div>
				<div className="max-w-[536px]">
					<div className="flex flex-col gap-y-6">
						<h3 className="text-[40px] leading-none font-semibold">
							Apple iPhone 14 Pro Max
						</h3>
						<div className="flex gap-x-4 items-center">
							<h4 className="text-[32px] leading-normal font-medium tracking-[0.96px]">
								$1399
							</h4>
							<h5 className="text-2xl line-through text-[#A0A0A0]">
								$1499
							</h5>
						</div>
					</div>
					<div className="mt-4 flex flex-col gap-y-6">
						<div className="flex items-center gap-x-6">
							<p className="text-15 leading-6">Select color :</p>
							<div className="flex gap-x-2">
								<div className="w-8 h-8 rounded-full bg-main-black" />
								<div className="w-8 h-8 rounded-full bg-[#781DBC]" />
								<div className="w-8 h-8 rounded-full bg-[#E10000]" />
								<div className="w-8 h-8 rounded-full bg-[#E1B000]" />
								<div className="w-8 h-8 rounded-full bg-[#E8E8E8]" />
							</div>
						</div>
						<div className="flex gap-x-4">
							<Tab>128GB</Tab>
							<Tab variant="notActive">256GB</Tab>
							<Tab variant="notActive">512GB</Tab>
							<Tab variant="selected">1TB</Tab>
						</div>
						<div className="flex gap-4">{}</div>
						<p className="text-sm leading-6 text-[#6C6C6C] tracking-[0.42px]">
							Enhanced capabilities thanks toan enlarged display
							of 6.7 inchesand work without rechargingthroughout
							the day. Incredible photosas in weak, yesand in
							bright lightusing the new systemwith two cameras{" "}
							<span className="text-[#2C2C2C] underline">
								more...
							</span>
						</p>
					</div>
					<div className="my-8 flex gap-x-4">
						<Button
							variant="outline"
							className="flex-1 min-w-[136px]"
						>
							Add to Wishlist
						</Button>
						<Button variant="fill" className="flex-1 min-w-[136px]">
							Add to Cart
						</Button>
					</div>
					<div className="flex gap-x-8">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="flex items-center gap-x-4"
							>
								<Icon>
									<feature.icon className="w-6 h-6" />
								</Icon>
								<div className="text-sm leading-6 font-medium">
									<p className="text-[#717171]">
										{feature.title}
									</p>
									<p className="">{feature.value}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-[#FAFAFA] flow-root">
				<div className="my-20 mx-40">
					<div className="py-12 px-10 rounded-lg bg-main-white">
						<div className="flex flex-col gap-y-8">
							<h6 className="text-2xl leading-8 font-medium">
								Details
							</h6>
							<p className="text-sm leading-6 text-[#9D9D9D] font-medium text-wrap-pretty">
								Just as a book is judged by its cover, the first
								thing you notice when you pick up a modern
								smartphone is the display. Nothing surprising,
								because advanced technologies allow you to
								practically level the display frames and cutouts
								for the front camera and speaker, leaving no
								room for bold design solutions. And how good
								that in such realities Apple everything is fine
								with displays. Both critics and mass consumers
								always praise the quality of the picture
								provided by the products of the Californian
								brand. And last year&apos;s 6.7-inch Retina
								panels, which had ProMotion, caused real
								admiration for many.
							</p>
							<div className="">
								<h6 className="text-xl leading-6 font-medium">
									Screen
								</h6>
								<div className="mt-4 flex flex-col gap-y-6">
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>Screen diagonal</p>
										<p className="text-15 leading-6">
											6.7&quot;
										</p>
									</div>
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>The screen resolution</p>
										<p className="text-15 leading-6">
											2796x1290
										</p>
									</div>
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>The screen refresh rate</p>
										<p className="text-15 leading-6">
											120Hz
										</p>
									</div>
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>The pixel density</p>
										<p className="text-15 leading-6">
											460ppi
										</p>
									</div>
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>Screen type</p>
										<p className="text-15 leading-6">
											OLED
										</p>
									</div>
									<div className="flex items-center justify-between mb-2 border-b-[0.5px] border-[#CDCDCD]">
										<p>Additionally</p>
										<div className="">
											<p className="text-15 leading-6">
												Dynamic Island
											</p>
											<p className="text-15 leading-6">
												Always-On display
											</p>
											<p className="text-15 leading-6">
												HDR display
											</p>
											<p className="text-15 leading-6">
												True Tone
											</p>
											<p className="text-15 leading-6">
												Wide color (P3)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-main-white flow-root">
				<div className="my-22 mx-40 flex flex-col gap-y-8">
					<div className="flex flex-col gap-y-12">
						<h4 className="text-2xl leading-8 font-medium">
							Reviews
						</h4>
						<div className="flex gap-x-[60px]">
							<OverallRating />
							<div className="grid grid-cols-[116px,_1fr,_27px] items-center gap-y-6 gap-x-4 w-full font-sf">
								{[
									{ grade: "Excellent", value: 100 },
									{ grade: "Good", value: 100 },
									{ grade: "Average", value: 100 },
									{ grade: "Below Average", value: 100 },
									{ grade: "Poor", value: 100 },
								].map((rating) => (
									<RatingLevel
										key={rating.grade}
										{...rating}
									/>
								))}
							</div>
						</div>
						<div>
							<input
								type="text"
								className="py-6 px-4 text-sm leading-4 text-[#979797] tracking-[-0.07px] font-sf w-full bg-transparent border-[0.5px] border-[#CECECE] rounded-lg"
								placeholder="Leave Comment"
							/>
						</div>
					</div>
					<CommentList />
				</div>
			</div>
			<RelatedProducts />
		</div>
	);
}

export default Page;
