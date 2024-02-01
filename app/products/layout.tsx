import React from "react";

import { Icons } from "@/components/icons";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="font-sf flow-roots">
			<div className="bg-main-white mx-4 lg:mx-40">
				<nav className="my-6 lg:my-10">
					<ul className="flex items-center gap-x-4">
						<li className="font-medium text- leading-none text-[#A4A4A4] last:text-main-black">
							Home
						</li>
						<Icons.chevronRight className="h-6 w-6 text-[#A4A4A4]" />
						<li className="font-medium text- leading-none text-[#A4A4A4] last:text-main-black">
							Catalog
						</li>
						<Icons.chevronRight className="h-6 w-6 text-[#A4A4A4]" />
						<li className="font-medium text- leading-none text-[#A4A4A4] last:text-main-black">
							Smartphones
						</li>
					</ul>
				</nav>
				{children}
			</div>
		</main>
	);
}

export default Layout;
