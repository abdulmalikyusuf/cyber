import React from "react";

import { Icons } from "@/components/icons";
import ProductCard from "@/components/product/product-card";
import products from "@/config/product-list";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { PageNumberButton } from "@/components/page-number";
import Filter from "@/components/filters";

function Page() {
	const product = products.at(1);
	return (
		<div className="mt-6 mb-14 flex gap-x-8">
			<Filter className="hidden" />
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-6">
					<div className="flex flex-wrap items-center lg:justify-between max-sm:gap-y-6 max-sm:gap-x-4">
						<Sheet>
							<SheetTrigger>
								<button
									type="button"
									className="order-1 lg:hidden w-[164px] h-14 p-4 flex justify-between items-center rounded-lg border-[0.5px] border-[#D4D4D4]"
								>
									<span className="text-15 leading-4 text-black-main tracking-[-0.075px]">
										Filters
									</span>
									<Icons.filter className="w-6 h-6" />
								</button>
							</SheetTrigger>
							<SheetContent side="right" className="">
								<Filter className="" />
							</SheetContent>
						</Sheet>
						<div className="order-3 lg:order-1 max-sm:clear-both inline-flex items-center gap-x-1.5">
							<p className="leading-none font-medium text-[#6C6C6C] tracking-[0.48px]">
								Selected Products:
							</p>
							<h6 className="text-xl leading-4 text-main-black tracking-[0.6px]">
								85
							</h6>
						</div>
						<Select>
							<SelectTrigger className="order-2 max-sm:w-[164px] max-sm:h-14">
								<SelectValue placeholder="By Rating" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-y-6">
						{Array.from({ length: 9 }).map((item) => (
							<ProductCard key={product.name} {...product} />
						))}
					</div>
				</div>
				<div className="flex items-center gap-x-4 h-full w-fit mx-auto">
					<Icons.chevronLeft className="h-6 w-6 text-main-black" />
					<div className="flex items-center h-full gap-x-2">
						<PageNumberButton variant="selected">
							1
						</PageNumberButton>
						<PageNumberButton>2</PageNumberButton>
						<div className="flex h-full items-end gap-1 pb-1">
							<div className="w-1 h-1 rounded-full bg-[#737373]" />
							<div className="w-1 h-1 rounded-full bg-[#737373]" />
							<div className="w-1 h-1 rounded-full bg-[#737373]" />
						</div>
						<PageNumberButton>3</PageNumberButton>
					</div>
					<Icons.chevronRight className="h-6 w-6 text-main-black" />
				</div>
			</div>
		</div>
	);
}

export default Page;
