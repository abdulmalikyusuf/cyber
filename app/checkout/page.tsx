import React from "react";

import Address from "@/components/checkout/address";
import { Icons } from "@/components/icons";

function CheckoutPage() {
	return (
		// <div className="my-12 flex flex-col gap-y-16 font-sf">
		<div className="">
			<h5 className="text-xl leading-6 font-semibold text-space-cadet">
				Select Address
			</h5>
			<div className="mt-8">
				<Address />
				<div className="">
					<div className="relative flex flex-col items-center gap-y-2 mt-12">
						<hr className="absolute inset-x-0 top-3 -z-10 dashed-line_gradient" />
						<button
							type="button"
							className="size-6 rounded-full bg-main-black inline-flex justify-center items-center"
						>
							<Icons.plus className="text-main-white" size={20} />
						</button>
						<p className="text-sm leading-6 text-center text-main-black tracking-wider">
							Add New Address
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutPage;
