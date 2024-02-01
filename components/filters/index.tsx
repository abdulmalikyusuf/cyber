import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import SearchBar from "@/components/ui/search-bar";

import PriceFilter from "@/components/filters/price";
import { cn } from "@/lib/utils";

function Filter({ className }: { className: string }) {
	return (
		<div className={cn(className)}>
			<div className="w-64 lg:flex flex-col gap-y-6">
				<PriceFilter />
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>Brand</AccordionTrigger>
						<AccordionContent>
							<SearchBar className="py-2 h-10" />
							<div className="flex flex-col gap-y-2">
								{["Apple", "Samsung", "Xiaomi"].map((brand) => (
									<div
										key={brand}
										className="flex items-center gap-x-2"
									>
										<Checkbox id={brand} />
										<Label
											id={brand}
											className="text-15 leading-6 font-medium text-main-black"
										>
											{brand}{" "}
											<span className="text-xs leading-6 font-normal text-[#929292]">
												110
											</span>
										</Label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>Built-in memory</AccordionTrigger>
						<AccordionContent>
							<SearchBar className="py-2 h-10" />
							<div className="flex flex-col gap-y-2">
								{["16GB", "32GB", "64GB"].map((brand) => (
									<div
										key={brand}
										className="flex items-center gap-x-2"
									>
										<Checkbox id={brand} />
										<Label
											id={brand}
											className="text-15 leading-6 font-medium text-main-black"
										>
											{brand}{" "}
											<span className="text-xs leading-6 font-normal text-[#929292]">
												110
											</span>
										</Label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

export default Filter;
