import Link from "next/link"
import { NavigationMenuLink } from "./navigation-menu"

export function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm w-full">
            <div className="leading-none font-medium mb-1">{title}</div>
            <div className="flex gap-2 items-center justify-start line-clamp-2 text-muted-foreground" >{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}