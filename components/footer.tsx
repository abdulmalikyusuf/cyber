import Image from "next/image";
import React from "react";

import { fontInter } from "@/lib/fonts";

function Footer() {
	return (
		<footer className="bg-main-black text-[#CFCFCF] font-sf">
			<div className="my-12 mx-8 sm:mx-160 sm:my-104">
				<div className="flex max-sm:flex-col max-sm:gap-y-8 sm:justify-between">
					<div className="text-white max-w-sm">
						<Image
							src="/logo-dark.svg"
							alt="Cyber Logo"
							className="dark:invert max-sm:mx-auto"
							width={96}
							height={32}
							priority
						/>
						<p className="mt-4 text-[13px] leading-6 max-sm:text-center sm:font-medium sm:text-sm">
							<span className={`${fontInter.className}`}>
								We are a residential interior design firm
								located in Portland. Our boutique-studio offers
								more than
							</span>
						</p>
					</div>
					<div className="w-fit mx-auto">
						<h6 className="text-main-white font-semibold leading-none max-sm:text-center">
							Services
						</h6>
						<ul className="font-light text-sm leading-8 max-sm:text-center mt-2">
							<li>Bonus program</li>
							<li>Gift cards</li>
							<li>Credit and payment</li>
							<li>Service contracts</li>
							<li>Non-cash account</li>
							<li>Payment</li>
						</ul>
					</div>
					<div className="w-fit mx-auto">
						<h6 className="text-main-white font-semibold leading-none max-sm:text-center">
							Assistance to the buyer
						</h6>
						<ul className="font-light text-sm leading-8 max-sm:text-center mt-2">
							<li>Find an order</li>
							<li>Terms of delivery</li>
							<li>Exchange and return of goods</li>
							<li>Guarantee</li>
							<li>Frequently asked questions</li>
							<li>Terms of use of the site</li>
						</ul>
					</div>
				</div>
				<div className="w-[173px] max-sm:mx-auto mt-8 flex justify-between items-center">
					<button type="button" className="sm:w-4 sm:h-4">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M24 4.36789C23.1182 4.76948 22.1687 5.04106 21.1727 5.1624C22.1898 4.53835 22.9702 3.54882 23.3379 2.37006C22.3856 2.94788 21.3333 3.36825 20.2092 3.5936C19.3133 2.61274 18.0328 2.00024 16.6156 2.00024C13.8982 2.00024 11.6936 4.26099 11.6936 7.049C11.6936 7.44481 11.7359 7.82907 11.8204 8.19887C7.72812 7.98797 4.10072 5.98002 1.67072 2.92187C1.2467 3.67016 1.00439 4.53835 1.00439 5.46287C1.00439 7.21368 1.87357 8.75937 3.19493 9.66511C2.38916 9.64055 1.62845 9.41086 0.963547 9.03528V9.09739C0.963547 11.5445 2.66103 13.5857 4.91495 14.0479C4.5022 14.1664 4.06691 14.2256 3.61754 14.2256C3.30058 14.2256 2.99067 14.1953 2.69061 14.136C3.31748 16.1411 5.1347 17.6015 7.29001 17.6405C5.6052 18.9955 3.48089 19.8031 1.17485 19.8031C0.777597 19.8031 0.384575 19.7799 0 19.7337C2.17926 21.1638 4.76844 22.0002 7.54781 22.0002C16.6057 22.0002 21.5573 14.3079 21.5573 7.63549C21.5573 7.41592 21.5531 7.19634 21.5446 6.9811C22.5068 6.26893 23.3421 5.38053 24 4.36789Z"
								fill="white"
							/>
						</svg>
					</button>
					<button type="button" className="sm:w-4 sm:h-4">
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.9381 5.72691C13.9381 5.97254 13.9381 6.77312 13.9381 7.91049H17.8486L17.4246 11.3964H13.9381C13.9381 16.7724 13.9381 23.9765 13.9381 23.9765H9.31032C9.31032 23.9765 9.31032 16.8678 9.31032 11.3964H6.89893V7.91049H9.31032C9.31032 6.52805 9.31032 5.54504 9.31032 5.27134C9.31032 3.96727 9.21207 3.34852 9.76618 2.33799C10.3206 1.32751 11.8843 -0.00814899 14.589 0.0240073C17.2943 0.0573354 18.4346 0.317585 18.4346 0.317585L17.8486 4.03276C17.8486 4.03276 16.1211 3.57662 15.2732 3.73918C14.4264 3.90179 13.9381 4.42341 13.9381 5.72691Z"
								fill="white"
							/>
						</svg>
					</button>
					<button type="button" className="sm:w-4 sm:h-4">
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.1586 5.037C17.1695 3.88716 16.6514 2.40156 16.6926 0.889085L12.9969 0.799805C12.9969 0.799805 12.9969 0.957485 12.9969 1.17012V15.9904C13.0485 20.679 5.64064 20.5652 6.22672 15.3827C6.58504 13.322 8.79928 12.0539 10.7668 12.7708V8.99988C6.48328 8.25396 2.42392 11.6634 2.46664 16.0069C2.84104 25.4269 16.3521 25.4281 16.727 16.0069C16.6326 15.6697 16.6854 9.39229 16.672 8.86285C18.3525 9.90853 20.3078 10.4312 22.288 10.3643V6.4698C20.4573 6.4698 19.0602 5.98308 18.1586 5.037Z"
								fill="white"
							/>
						</svg>
					</button>
					<button type="button" className="sm:w-4 sm:h-4">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C9.85576 22 8.31273 21.9989 7.1097 21.8823C5.92045 21.767 5.1597 21.5455 4.55258 21.1639C3.85868 20.728 3.27192 20.1413 2.83591 19.4474C2.45455 18.8403 2.23288 18.0795 2.11773 16.8903C2.00106 15.6873 2 14.1442 2 12C2 9.85576 2.00106 8.31273 2.11773 7.1097C2.23288 5.92045 2.45455 5.1597 2.83591 4.55258C3.2719 3.85866 3.85866 3.2719 4.55258 2.83591C5.1597 2.45455 5.92045 2.23288 7.1097 2.11773C8.31258 2.00106 9.85561 2 12 2C14.1442 2 15.6873 2.00106 16.8903 2.11773C18.0795 2.23288 18.8403 2.45455 19.4474 2.83591C20.1413 3.27192 20.728 3.85868 21.1639 4.55258C21.5455 5.1597 21.767 5.92045 21.8823 7.1097C21.9989 8.31273 22 9.85576 22 12C22 14.1442 21.9989 15.6873 21.8823 16.8903C21.767 18.0795 21.5455 18.8403 21.1639 19.4474C20.728 20.1413 20.1413 20.728 19.4474 21.1639C18.8403 21.5455 18.0795 21.767 16.8903 21.8823C15.6873 21.9989 14.1442 22 12 22Z"
								fill="white"
								stroke="white"
								strokeWidth="2"
							/>
							<path
								d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
								fill="white"
								stroke="black"
								strokeWidth="2"
							/>
							<path
								d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
								fill="black"
							/>
						</svg>
					</button>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
