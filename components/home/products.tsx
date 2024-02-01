import React from "react";
import ProductCard from "../product/product-card";
import products from "@/config/product-list";
import { cn } from "@/lib/utils";

function Products() {
	return (
		<section className="bg-main-white flow-root font-sf">
			<div className="mx-4 my-14 lg:mx-40 lg:my-14">
				<nav className="mb-8">
					<ul className="flex items-center gap-x-8">
						{["New Arrival", "Bestseller", "Featured Products"].map(
							(item) => (
								<li
									key={item}
									className={cn(
										"text-[#8B8B8B] font-medium leading-loose text-center",
										// Hardcoding an option before making it dynamic
										item === "New Arrival" &&
											"text-main-black border-b-2 border-main-black"
									)}
								>
									{item}
								</li>
							)
						)}
					</ul>
				</nav>
				<div className="flex flex-wrap gap-4">
					{products.map((product) => (
						<ProductCard key={product.name} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Products;
