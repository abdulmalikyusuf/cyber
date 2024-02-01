import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "@/components/ui/label";
import { Icons } from "../icons";

function Address() {
	const addresses = [
		{
			label: "2118 Thornridge",
			text: "2118 Thornridge Home 2118 Thornridge Cir. Syracuse, Connecticut 35624Contact - (209) 555-0104",
			contact: "(209) 555-0104",
			place: "home",
		},
		{
			label: "Headoffice",
			text: "2715 Ash Dr. San Jose, South Dakota 83475",
			contact: "(704) 555-0127",
			place: "office",
		},
	];
	return (
		<RadioGroup
			defaultValue="comfortable"
			className="flex flex-col gap-y-6"
		>
			{addresses.map((address) => (
				<div
					key={address.label}
					className="p-6 font-sf bg-[#F6F6F6] rounded-lg"
				>
					<div className="flex items-start gap-x-4">
						<RadioGroupItem
							value={address.text}
							id={address.contact}
						/>
						<div className="flex-1 flex items-center">
							<div className="flex-1 text-[#17183B]">
								<div className="flex gap-x-6">
									<Label
										htmlFor={address.contact}
										className="text-lg leading-6 tracking-[0.15px]"
									>
										{address.label}
									</Label>
									<small className="px-2 py-1 bg-main-black inline-flex items-center justify-center rounded-[4px] text-xs uppercase text-main-white font-medium leading-none">
										{address.place}
									</small>
								</div>
								<p className="mt-4">{address.text}</p>
								<p className="mt-2">{address.contact}</p>
							</div>
							<div className="flex gap-x-6">
								<button type="button" className="">
									<Icons.close className="size-6" />
								</button>
								<button type="button" className="">
									<Icons.pencil className="size-6" />
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</RadioGroup>
	);
}

export default Address;
