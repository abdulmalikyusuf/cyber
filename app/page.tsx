import Hero from "@/components/home/hero";
import Banner from "@/components/home/banner";
import Category from "@/components/home/category";
import Products from "@/components/home/products";
import BigBanner from "@/components/home/big-banner";
import DiscountProducts from "@/components/home/discount";
import SaleBanner from "@/components/home/sale-banner";

export default function Home() {
	return (
		<main className="bg-[#FAFAFA]">
			<Hero />
			<Banner />
			<Category />
			<Products />
			<BigBanner />
			<DiscountProducts />
			<SaleBanner />
		</main>
	);
}
