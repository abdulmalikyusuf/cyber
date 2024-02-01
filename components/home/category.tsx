import { categories } from "@/config/home";
import Image from "next/image";
import React from "react";

function Category() {
	return (
		<div className="text-main-black font-sf flow-root">
			<div className="my-16 mx-4 lg:my-20 lg:mx-40">
				<div className="flex flex-col gap-y-12 lg:gap-y-8">
					<div className="flex justify-between items-center">
						<h5 className="text-2xl font-semibold tracking-[0.24px]">
							Browse By Category
						</h5>
						<div className="flex items-center gap-x-4">
							<button type="button">
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.3333 27.6667C21.0679 27.6679 20.8132 27.5622 20.6267 27.3733L9.95999 16.7067C9.57006 16.3162 9.57006 15.6838 9.95999 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0155 4.65117C22.3963 5.03199 22.4071 5.64599 22.04 6.04L12.08 16L22.04 25.96C22.4299 26.3504 22.4299 26.9829 22.04 27.3733C21.8535 27.5622 21.5987 27.6679 21.3333 27.6667Z"
										fill="#2E2E2E"
									/>
								</svg>
							</button>
							<button type="button">
								<svg
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.6667 4.77852C10.9322 4.77727 11.1869 4.88301 11.3734 5.07186L22.0401 15.7385C22.43 16.1289 22.43 16.7614 22.0401 17.1519L11.3734 27.8185C10.9794 28.1857 10.3654 28.1748 9.98457 27.794C9.60375 27.4132 9.59292 26.7992 9.96007 26.4052L19.9201 16.4452L9.96007 6.48519C9.57013 6.09477 9.57013 5.46228 9.96007 5.07186C10.1466 4.88301 10.4013 4.77727 10.6667 4.77852Z"
										fill="black"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
						{categories.map((category) => (
							<button
								type="button"
								key={category.icon}
								className="bg-[#EDEDED] w-40 h-32 py-6 flex flex-col items-center gap-y-2 rounded-2xl"
							>
								<Image
									src={category.icon}
									width={48}
									height={48}
									alt={category.title}
									className=""
								/>
								<span className="text-base font-medium text-center">
									{category.title}
								</span>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;
