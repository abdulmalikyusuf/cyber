import AddedProduct from "@/components/cart/added";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function PaymentPage() {
	const checkoutProducts = [
		{
			imgSrc: "/images/cart-iphone.png",
			label: "Apple IPhone 14 Pro Max 128 Gb",
			price: 1399,
		},
		{
			imgSrc: "/images/cart-iphone.png",
			label: "AirPods Max Silver",
			price: 549,
		},
		{
			imgSrc: "/images/cart-iphone.png",
			label: "Apple Watch Series 9 GPS 41mm",
			price: 399,
		},
	];
	return (
		<div className="flex gap-x-24 ustify-between">
			<div className="border border-[#EBEBEB] rounded-[10px]">
				<div className="my-8 mx-6">
					<div className="flex flex-col gap-y-6">
						<h5 className="text-xl leading-4 font-medium tracking-[0.6px]">
							Summary
						</h5>
						<div className="flex flex-col gap-y-4">
							{checkoutProducts.map((product) => (
								<AddedProduct
									key={product.label}
									{...product}
								/>
							))}
						</div>
						<div className="flex flex-col gap-y-4">
							<div className="">
								<small className="text-sm leading-4 font-medium text-[#545454]">
									Address
								</small>
								<p className="mt-2">
									1131 Dusty Townline, Jacksonville, TX 40322
								</p>
							</div>
							<div className="">
								<small className="text-sm leading-4 font-medium text-[#545454]">
									Shipment method
								</small>
								<p className="mt-2">Free</p>
							</div>
						</div>
						<div className="flex flex-col gap-y-4 tracking-[0.48px]">
							<div className="flex justify-between items-center">
								<p className="font-medium">Subtotal</p>
								<p className="leading-loose font-semibold">
									$2347
								</p>
							</div>
							<div className="flex flex-col gap-y-2">
								<div className="flex justify-between items-center leading-loose">
									<p className="text-[#545454]">
										Estimated Tax
									</p>
									<p className="font-medium">$50</p>
								</div>
								<div className="flex justify-between items-center leading-loose">
									<p className="text-[#545454]">
										Estimated shipping & Handling
									</p>
									<p className="font-medium">$29</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<p className="font-medium">Total</p>
								<p className="leading-loose font-semibold">
									$2347
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[512px]">
				<div className="flex flex-col gap-y-10">
					<div className="flex flex-col gap-y-6">
						<h5 className="text-xl leading-4 font-medium tracking-[0.6px]">
							Payment
						</h5>
						<ul className="flex items-center gap-x-14">
							<li className="py-2 border-b border-main-black text-main-black text-sm leading-4 font-medium tracking-[0.4px]">
								Credit Card
							</li>
							<li className="py-2 text-[#717171] text-sm leading-4 font-medium tracking-[0.4px]">
								PayPal
							</li>
							<li className="py-2 text-[#717171] text-sm leading-4 font-medium tracking-[0.4px]">
								PayPal Credit
							</li>
						</ul>
					</div>
					<div className=""></div>
					<div className="grid grid-cols-2 gap-4">
						<Field
							placeholder="Cardholder Name"
							className="col-span-2"
						/>
						<Field
							placeholder="Card Number"
							className="col-span-2"
						/>
						<Field placeholder="Exp.Date" className="" />
						<Field placeholder="CVV" className="" />
					</div>
				</div>
				<div className="my-12">
					<div className="flex items-center gap-x-2">
						<Checkbox value="billingAddress" />
						<Label htmlFor="billingAddress">
							Same as billing address
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentPage;
