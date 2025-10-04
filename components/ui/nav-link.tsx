'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Typography } from './typography'

type NavLinkProps = {
	href: string
	label: string
	underline?: boolean
	hoverNoColorChange?: boolean
}

const NavLink = ({
	href,
	label,
	underline = true,
	hoverNoColorChange = false
}: NavLinkProps) => {
	return (
		<Link
			href={href}
			className={cn(
				'relative no-underline text-sm',
				hoverNoColorChange
					? 'hover:underline hover:decoration-1 hover:underline-offset-4'
					: underline &&
							'hover:underline hover:decoration-1 hover:underline-offset-4 hover:text-muted-foreground'
			)}>
			<Typography>{label}</Typography>
		</Link>
	)
}

export default NavLink
