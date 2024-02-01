import React, { ReactNode } from "react";
import { headers } from "next/headers";

import { Button } from "@/components/ui/button";
import CheckoutNavigation from "@/components/checkout/navigation";
import Link from "next/link";
import { Route } from "next";
import { current } from "tailwindcss/colors";

function CheckoutLayout({ children }: { children: ReactNode }) {
	// const currentRoute = headers().get("referer")?.split("/").at(-1);
	// const checkoutRoutes = ["checkout", "shipping", "payment"];
	// const currentRouteIndex = checkoutRoutes.findIndex(
	// 	(value) => value === currentRoute
	// );
	// const nextRoute = checkoutRoutes.at(currentRouteIndex + 1);
	// const prevRoute = checkoutRoutes.at(currentRouteIndex - 1);

	return (
		<div>
			<div className="mx-40 font-sf">
				<CheckoutNavigation />
				{children}
				{/* <div className="p my-12 flex flex-col justify-between min-h-[688px]">
					<div className="flex justify-end gap-x-6">
							<Button variant="outline" className="relative w-52">
								Back
								<Link
									href={`/checkout/${prevRoute}` as Route}
									className="absolute inset-0"
								/>
							</Button>
							<Button variant="fill" className="relative w-52">
								Next
								<Link
									href={`/checkout/${nextRoute}` as Route}
									className="absolute inset-0"
								/>
							</Button>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default CheckoutLayout;
