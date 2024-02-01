import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex justify-center items-center w-8 h-8 py-px px-3 gap-2 rounded-md font-medium text-center tracking-[0.48px]",
	{
		variants: {
			variant: {
				default: "bg-[#F6F6F6] text-main-black",
				selected: "bg-main-black text-main-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const PageNumberButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
PageNumberButton.displayName = "PageNumberButton";

export { PageNumberButton, buttonVariants };
