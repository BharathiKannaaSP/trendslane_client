'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import NavLink from './ui/nav-link'
import { Typography } from './ui/typography'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ArrowRight, LogOut, Moon, Settings, Sun, User } from 'lucide-react'

const Navbar = () => {
	const { setTheme } = useTheme()
	const [open, setOpen] = useState(false)

	return (
		<nav className='sticky top-0 z-50 bg-background  w-full isolate overflow-hidden'>
			<div className='relative flex items-center justify-between h-14 pl-8 pr-8'>
				{/* Left */}
				<div className='flex items-center flex-1'>
					<ul className='flex items-center gap-5 list-none'>
						<li>
							<NavLink href='/h/women' label='Women' />
						</li>
						<li>
							<NavLink href='/h/men' label='Men' />
						</li>
						<li>
							<NavLink href='/h/teen' label='Teen' />
						</li>
						<li>
							<NavLink href='/h/kids' label='Kids' />
						</li>
					</ul>
				</div>

				{/* Center */}
				<Link href='/' className='flex items-center justify-center h-full m-0'>
					<Image alt='logo' src='/logo.svg' width={220} height={100} />
				</Link>

				{/* Right */}
				<div className='flex items-center justify-end flex-1 gap-6'>
					<ul className='flex items-center gap-5 list-none'>
						<li>
							<NavLink href='/search/women' label='Search' />
						</li>

						{/* Popover Login */}
						<li>
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant='link'
										className='font-semibold hover:text-muted-foreground text-[13px]'>
										LOG IN
									</Button>
								</PopoverTrigger>
								<PopoverContent
									onFocusOutside={() => setOpen(false)}
									className='w-100 mt-2'>
									<div className='flex gap-4 flex-col'>
										<Button className='w-full font-semibold'>Sign in</Button>
										<div className='flex items-center justify-center gap-2'>
											<Typography className='capitalize font-normal text-muted-foreground'>
												Don't have an account?
											</Typography>
											<Button className='p-0 underline' variant='link'>
												Register
											</Button>
										</div>
										<div className='w-full'>
											<ul className='flex flex-col gap-2'>
												<li className='flex items-center justify-between'>
													<Button variant='link'>My Purchase</Button>
													<ArrowRight size={12} />
												</li>
												<li className='flex items-center justify-between'>
													<Button variant='link'>Help</Button>
													<ArrowRight size={12} />
												</li>
											</ul>
										</div>
									</div>
								</PopoverContent>
							</Popover>
						</li>

						<li>
							<NavLink href='/wishlist' label='Wishlist' />
						</li>

						<li>
							<Link href='/'>
								<Button
									size='sm'
									tabIndex={-1}
									variant='link'
									className='font-semibold uppercase text-sm hover:text-muted-foreground cursor-pointer'>
									<Typography>Bag (2)</Typography>
								</Button>
							</Link>
						</li>
					</ul>

					{/* User Menu */}
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar className='size-12'>
								<AvatarImage
									src='https://images.pexels.com/photos/2169428/pexels-photo-2169428.jpeg'
									alt='avatar'
								/>
								<AvatarFallback>RG</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent sideOffset={10}>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<User className='h-[1.2rem] w-[1.2rem] mr-2' />
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
								Settings
							</DropdownMenuItem>
							<DropdownMenuItem variant='destructive'>
								<LogOut className='h-[1.2rem] w-[1.2rem] mr-2' />
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Theme Menu */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline' className='border-0' size='icon'>
								<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
								<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
								<span className='sr-only'>Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem onClick={() => setTheme('light')}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
