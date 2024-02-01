"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function ShippingPage() {
	const shipmentMethods = [
		{
			type: "Free",
			description: "Regularly shipment",
			deliveryDate: "17 Oct, 2023",
			available: true,
		},
		{
			type: "$8.50",
			description: "Get your delivery as soon as possible",
			deliveryDate: "17 Oct, 2023",
			available: true,
		},
		{
			type: "Schedule",
			description: "Pick a date when you want to get your delivery",
			deliveryDate: "Select Date",
			available: false,
		},
	];
	const [method, setMethod] = useState("Free");

	return (
		<div className="my-12 font-sf">
			<div className="">
				<h5 className="text-xl leading-6 font-semibold text-space-cadet">
					Shipment Method
				</h5>
				<div className="mt-8">
					<RadioGroup
						defaultValue={method}
						onValueChange={setMethod}
						className="w-full flex flex-col gap-y-4"
					>
						{shipmentMethods.map((method) => (
							<div
								key={method.type}
								className="grid grid-cols-[24px,_68px,_1fr,_1fr] gap-x-4 justify-between items-center p-6 border border-[#D1D1D8] rounded-xl"
							>
								<RadioGroupItem
									value={method.type}
									id={method.type}
								/>
								<p
									className={cn(
										"font-medium text-main-black",
										!method.available && "text-[#A2A3B1]"
									)}
								>
									{method.type}
								</p>
								<p
									className={cn(
										"text-space-cadet",
										!method.available && "text-[#A2A3B1]"
									)}
								>
									{method.description}
								</p>
								<p
									className={cn(
										"justify-self-end font-medium text-space-cadet tracking-[0.1px]",
										!method.available && "text-[#A2A3B1]"
									)}
								>
									{method.deliveryDate}
								</p>
							</div>
						))}
					</RadioGroup>
				</div>
			</div>
		</div>
	);
}

export default ShippingPage;
