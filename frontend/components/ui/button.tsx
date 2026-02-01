import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold shadow-lg hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] active:translate-y-0",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 rounded-md",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-full px-8 py-6 text-base has-[>svg]:px-6",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode | LucideIcon
  iconPosition?: "left" | "right"
  iconClassName?: string
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  icon,
  iconPosition = "right",
  iconClassName,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Render icon helper function
  const renderIcon = (): React.ReactNode => {
    if (!icon) return null

    // Check if icon is already a React element (most common case)
    if (React.isValidElement(icon)) {
      const existingClassName = (icon.props as any)?.className
      return React.cloneElement(icon, {
        className: cn("w-5 h-5 transition-transform group-hover:translate-x-1", iconClassName, existingClassName)
      } as any)
    }

    // Check if icon is a React component constructor (function or class)
    // This handles LucideIcon and other function components
    if (typeof icon === "function") {
      try {
        const IconComponent = icon as React.ComponentType<{ className?: string }>
        const iconProps: { className: string } = {
          className: cn("w-5 h-5 transition-transform group-hover:translate-x-1", iconClassName)
        }
        // Use React.createElement to instantiate the component
        const element = React.createElement(IconComponent, iconProps)
        // Ensure we return a valid React element
        if (React.isValidElement(element)) {
          return element
        }
      } catch (error) {
        console.error("Error rendering icon component:", error)
        return null
      }
    }

    // For primitive values (string, number, etc.), wrap in span
    if (typeof icon === "string" || typeof icon === "number") {
      return (
        <span className={cn("transition-transform group-hover:translate-x-1", iconClassName)}>
          {icon}
        </span>
      )
    }

    // If we get here, something unexpected was passed
    console.warn("Button icon prop received unexpected type:", typeof icon, icon)
    return null
  }

  const iconElement = renderIcon()

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), "group", className)}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </Comp>
  )
}

export { Button, buttonVariants }
