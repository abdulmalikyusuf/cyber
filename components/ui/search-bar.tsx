import { cn } from "@/lib/utils";
import React from "react";

function SearchBar({ className }: { className: string }) {
	return (
		<form
			className={cn(
				"p-4 flex gap-x-2 items-center bg-[#F5F5F5] rounded-lg w-full",
				className
			)}
		>
			<button type="submit">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
						stroke="#989898"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<input
				type="text"
				name="search-product"
				id="search-product"
				placeholder="Search"
				className="bg-transparent outline-none text-[#656565] text-sm font-medium"
			/>
		</form>
	);
}

export default SearchBar;
