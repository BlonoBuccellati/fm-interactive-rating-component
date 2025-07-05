import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Card({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"section"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "section";
  return (
    <Comp
      data-slot="card"
      className={cn(
        "from-gradient-grey-1 to-gradient-grey-2 py-sm-300-to-md-400 mx-auto max-w-[clamp(20.438rem,15.368rem+21.63vw,25.75rem)] rounded-[clamp(0.938rem,0.043rem+3.82vw,1.875rem)] bg-gradient-to-b px-300 text-white",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"h1"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h1";
  return (
    <Comp
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-action" className={cn("", className)} {...props} />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
