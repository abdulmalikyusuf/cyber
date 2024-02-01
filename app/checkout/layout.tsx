import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import CheckoutNavigation from "@/components/checkout/navigation";

function CheckoutLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<div className="mx-40 font-sf">
				<CheckoutNavigation />
				<div className="p my-12 flex flex-col justify-between min-h-[688px]">
					{children}
					<div className="flex justify-end gap-x-6">
						<Button variant="outline" className="w-52">
							Back
						</Button>
						<Button variant="fill" className="w-52">
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutLayout;
