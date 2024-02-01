import React from "react";
import Image from "next/image";

import Stars from "./stars";
import UserPicture from "/public/images/User Pic.svg";
import { Button } from "../ui/button";

function Comment() {
	return (
		<div className="bg-[#FAFAFA] font-sf rounded-[10px] flow-root">
			<div className="my-6 ml-4 mr-7">
				<div className="flex items-start gap-x-5">
					<div className="w-14 h-14 flex-1">
						<Image
							src={UserPicture}
							alt="User picture"
							// height={56}
							// width={56}
							className="rounded-full w-full h-full"
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<div className="flex justify-between items-start text-main-black">
							<h6 className="text-[17px] leading-6 font-semibold">
								Grace Carey
							</h6>
							<small className="text-sm leading-4 text-right font-medium opacity-20">
								24 January,2023
							</small>
						</div>
						<Stars numberOfStars={5} />
						<p className="text-15 leading-6 font-medium text-[#7E7E7E]">
							I was a bit nervous to be buying a secondhand phone
							from Amazon, but I couldn’t be happier with my
							purchase!! I have a pre-paid data plan so I was
							worried that this phone wouldn’t connect with my
							data plan, since the new phones don’t have the
							physical Sim tray anymore, but couldn’t have been
							easier! I bought an Unlocked black iPhone 14 Pro Max
							in excellent condition and everything is PERFECT. It
							was super easy to set up and the phone works and
							looks great. It truly was in excellent condition.
							Highly recommend!!!🖤
						</p>
						{/* {images &&
						<div className="flex gap-x-2">
							<Image src={} alt="" className="rounded-md h-[88px] w-[120px]"/>
						</div>
						} */}
					</div>
				</div>
			</div>
		</div>
	);
}

function CommentList() {
	return (
		<div className="">
			<div className="relative flex flex-col gap-y-6">
				{Array.from({ length: 4 }).map((i, idx) => (
					<Comment key={idx} />
				))}
				<div className="absolute bottom-0 inset-x-0 bg-[linear-gradient(204deg,_rgba(255,_255,_255,_0.00)_15.44%,_#FFF_84.39%)] w-full h-48" />
			</div>
			<div className="w-fit mx-auto">
				<Button variant="outline" size="sm" icon>
					View More
				</Button>
			</div>
		</div>
	);
}

export default CommentList;
