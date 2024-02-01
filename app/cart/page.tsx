import CartProduct from "@/components/cart/product";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function ShoppingPage() {
	return (
		<div className="font-sf text-main-black">
			<div className="my-20 mx-40">
				<div className="flex items-start gap-x-12">
					<div className="flex-1">
						<div className="">
							<h5 className="text-2xl leading-none font-semibold">
								Shopping Cart
							</h5>
							<div className="mt-10 flex flex-col divide-y-[0.5px] divide-[#A3A3A3]">
								<div className="py-10 first:pt-0 first:pb-10 last:pb-10 last:pt-10">
									<CartProduct />
								</div>
								<div className="py-10 first:pt-0 first:pb-10 last:pb-10 last:pt-10">
									<CartProduct />
								</div>
								<div className="py-10 first:pt-0 first:pb-10 last:pb-10 last:pt-10">
									<CartProduct />
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 border border-[#EBEBEB] rounded-[10px]">
						<div className="my-14 mx-16">
							<h6 className="text-xl leading-4 font-semibold text-[#111111]">
								Order Summary
							</h6>
							<div className="mt-10">
								<div className="flex flex-col gap-y-6">
									<div className="">
										<Label
											htmlFor="promoCode"
											className="text-[#545454] block"
										>
											Discount code / Promo code
										</Label>
										<input
											type="text"
											className="w-full mt-2 bg-main-white border-0.5 border-[#9F9F9F] rounded-lg p-4 pr-0 text-sm leading-6 text-[#979797] -tracking-[0.07px]"
											placeholder="Code"
											name="promoCode"
											id="promoCode"
										/>
									</div>
									<div className="">
										<Label
											htmlFor="cardNumber"
											className="text-[#545454] block"
										>
											Your bonus card number
										</Label>
										<div className="flex w-full mt-2 bg-main-white border-0.5 border-[#9F9F9F] rounded-lg p-4">
											<input
												type="text"
												className="flex-1 text-sm leading-6 text-[#979797] -tracking-[0.07px]"
												placeholder="Enter Card Number"
												name="cardNumber"
												id="cardNumber"
											/>
											<button className="p-2 text-sm leading-4 font-medium text-center w-20 h-8 border border-main-black rounded-md hover:bg-main-black hover:text-main-white transition-colors">
												Apply
											</button>
										</div>
									</div>
									<div className="flex flex-col gap-y-4">
										<div className="flex justify-between items-center font-medium tracking-[0.48px]">
											<p className="">Subtotal</p>
											<p className="leading-8">$2347</p>
										</div>
										<div className="flex flex-col gap-y-2">
											<div className="flex justify-between items-center tracking-[0.48px]">
												<p className="text-[#545454]">
													Estimated Tax
												</p>
												<p className="leading-8 font-medium">
													$50
												</p>
											</div>
											<div className="flex justify-between items-center tracking-[0.48px]">
												<p className="text-[#545454]">
													Estimated shipping &
													Handling
												</p>
												<p className="leading-8 font-medium">
													$29
												</p>
											</div>
										</div>
										<div className="flex justify-between items-center font-medium tracking-[0.48px]">
											<p className="">Total</p>
											<p className="leading-8">$2426</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-12">
								<Link href="/checkout">
									<Button className="w-full" variant="fill">
										Checkout
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShoppingPage;
