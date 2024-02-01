import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const buttonVariants = cva(
	"inline-flex justify-center items-center gap-x-2 border rounded-md text-base font-medium font-sf text-center transition-colors",
	{
		variants: {
			variant: {
				default:
					"border-main-white text-main-white hover:bg-main-black hover:border-main-black",
				outline:
					"border-main-black text-main-black hover:bg-main-black hover:border-main-white hover:text-main-white",
				fill: "bg-main-black text-main-white hover:bg-transparent hover:border-main-black hover:text-main-black",
			},
			size: {
				default: "w-fit py-4 px-14 h-14",
				sm: "py-3 px-16 text-sm leading-6",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			icon = false,
			children,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{children}
				{icon && (
					<Icons.chevronDown className="w-6 h-6 text-current stroke-current" />
				)}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
