"use client";

import React, { useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

function PriceFilter() {
	const [priceFromTo, setPriceFromTo] = useState([90, 9000]);
	const handleSliderChange = (values: number[]) => setPriceFromTo(values);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === "priceFrom") {
			const value = e.target.valueAsNumber;
			setPriceFromTo((prev) => [value, prev.at(1) as number]);
		} else if (e.target.id === "priceTo") {
			const value = e.target.valueAsNumber;
			setPriceFromTo((prev) => [prev.at(0) as number, value]);
		}
	};

	return (
		<div>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Price</AccordionTrigger>
					<AccordionContent className="">
						<div className="relative flex justify-between items-end self-stretch text-sm leading-6 text-[#A7A7A7] tracking-[-0.07px]">
							<div className="flex flex-col gap-2">
								<Label htmlFor="priceFrom">From</Label>
								<Input
									value={priceFromTo.at(0)}
									onChange={handleChange}
									type="number"
									placeholder="1299"
									name="priceFrom"
									id="priceFrom"
									className="w-[106px]"
								/>
							</div>
							<div className="absolute right-[calc(50%-10px)] bottom-5 w-5 h-px bg-[#E7E7E7]" />
							<div className="flex flex-col gap-2">
								<Label htmlFor="priceTo">To</Label>
								<Input
									value={priceFromTo.at(1)}
									onChange={handleChange}
									type="number"
									placeholder="1299"
									name="priceTo"
									id="priceTo"
									className="w-[106px]"
								/>
							</div>
						</div>
						<Slider
							onValueChange={handleSliderChange}
							defaultValue={priceFromTo}
							max={100000}
							step={100}
							minStepsBetweenThumbs={10}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default PriceFilter;
