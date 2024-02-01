import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tabVariants = cva(
	"inline-flex justify-center items-center py-4 px-6 gap-2 w-[98px] border rounded-lg text-sm leading-4 font-medium font-sf text-center transition-colors",
	{
		variants: {
			variant: {
				default: "",
				active: "border-[#D5D5D5] text-[#6F6F6F]",
				notActive: "border-[#D5D5D5] text-[#D5D5D5]",
				selected: "border-main-black text-main-black",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface TabProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof tabVariants> {
	asChild?: boolean;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(tabVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Tab.displayName = "Tab";

export { Tab, tabVariants };
