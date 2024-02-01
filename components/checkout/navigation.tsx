"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const routes = [
	{ title: "Address", href: "/checkout", icon: Icons.mapPin },
	{ title: "shipping", href: "/checkout/shipping", icon: Icons.trolley },
	{ title: "Payment", href: "/checkout/payment", icon: Icons.creditCard },
];
function CheckoutNavigation() {
	const pathname = usePathname();

	return (
		<div className="my-[72px]">
			<ul className="flex items-center justify-between">
				{routes.map((route, idx) => (
					<li key={route.title}>
						<Link
							href={route.href}
							className={cn(
								"flex items-center gap-x-2 text-main-black w-56",
								pathname !== route.href && "opacity-20"
							)}
						>
							<button
								type="button"
								className="size-6 rounded-full bg-current inline-flex justify-center items-center p-1"
							>
								<route.icon className="text-main-white" />
							</button>
							<div className="text-main-black w-32">
								<small className="text-sm leading-6 font-medium tracking-[0.42px]">
									Step {idx + 1}
								</small>
								<p className="text-[19px] leading-6 font-medium tracking-[0.57px] capitalize">
									{route.title}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CheckoutNavigation;
