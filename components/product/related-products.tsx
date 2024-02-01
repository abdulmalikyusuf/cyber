import React from "react";
import ProductCard from "./product-card";
import { discountedProducts } from "@/config/product-list";

function RelatedProducts() {
	return (
		<section className="bg-main-white flow-root font-sf">
			<div className="mx-4 my-14 lg:mx-40 lg:my-20">
				<h6 className="mb-8 text-2xl font-medium text-main-black">
					Related Products
				</h6>
				<div className="flex flex-wrap gap-4">
					{discountedProducts.map((product) => (
						<ProductCard key={product.name} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}

export default RelatedProducts;
