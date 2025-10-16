'use client'

import Link from 'next/link'
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
					<svg
						width='200'
						height='100'
						viewBox='0 0 78 10'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-label='Trendslane'>
						<title>Trendslane</title>
						<path
							d='M7.17188 0.363281V1.32422H4.59375V9H3.17578V1.32422H0.597656V0.363281H7.17188ZM8.82422 0.363281H10.2305V9H8.82422V0.363281ZM14.6836 9H13.1953L11.5664 5.87109C11.543 5.87109 11.5156 5.875 11.4844 5.88281C11.4609 5.88281 11.4219 5.88281 11.3672 5.88281C11.3125 5.88281 11.2305 5.88281 11.1211 5.88281C11.0195 5.88281 10.8828 5.88281 10.7109 5.88281V4.85156H11.5078C11.6797 4.85156 11.8516 4.82422 12.0234 4.76953C12.1953 4.70703 12.3516 4.60938 12.4922 4.47656C12.6328 4.34375 12.7461 4.16016 12.832 3.92578C12.918 3.68359 12.9609 3.38672 12.9609 3.03516C12.9609 2.89453 12.9414 2.73438 12.9023 2.55469C12.8633 2.36719 12.7812 2.19141 12.6562 2.02734C12.5391 1.85547 12.3711 1.71484 12.1523 1.60547C11.9336 1.48828 11.6445 1.42969 11.2852 1.42969H10.7109V0.363281H11.3086C11.6758 0.363281 12.0391 0.421875 12.3984 0.539062C12.7578 0.65625 13.0781 0.832031 13.3594 1.06641C13.6484 1.30078 13.8789 1.58594 14.0508 1.92188C14.2305 2.25 14.3203 2.62109 14.3203 3.03516C14.3203 3.66016 14.1758 4.19141 13.8867 4.62891C13.5977 5.06641 13.207 5.39062 12.7148 5.60156L14.6836 9ZM16.6172 0.363281H18.0469V9H16.6172V0.363281ZM21.6562 5.10938H18.5273V4.14844H21.6562V5.10938ZM18.5273 7.93359H22.0195V9H18.5273V7.93359ZM22.0195 0.363281V1.42969H18.5273V0.363281H22.0195ZM28.7578 0.363281H30.1875V9H28.7578L25.8516 3.89062V1.19531L28.7578 6.31641V0.363281ZM23.9414 9V0.363281H25.3711V9H23.9414ZM32.3789 0.363281H33.7852V9H32.3789V0.363281ZM34.9805 0.363281C35.707 0.363281 36.3438 0.480469 36.8906 0.714844C37.4453 0.941406 37.9023 1.24609 38.2617 1.62891C38.6289 2.01172 38.9023 2.44922 39.082 2.94141C39.2617 3.42578 39.3516 3.92578 39.3516 4.44141C39.3516 5.15234 39.2734 5.76172 39.1172 6.26953C38.9688 6.76953 38.7773 7.19141 38.543 7.53516C38.3086 7.87109 38.043 8.13672 37.7461 8.33203C37.457 8.52734 37.1758 8.67578 36.9023 8.77734C36.6289 8.87109 36.3789 8.93359 36.1523 8.96484C35.9258 8.98828 35.7578 9 35.6484 9H34.2656V7.96875H35.1797C36.1328 7.96875 36.8203 7.66406 37.2422 7.05469C37.6641 6.44531 37.875 5.5625 37.875 4.40625C37.875 4.04688 37.832 3.69141 37.7461 3.33984C37.6602 2.98828 37.4922 2.67188 37.2422 2.39062C37 2.10156 36.668 1.87109 36.2461 1.69922C35.8242 1.51953 35.2773 1.42969 34.6055 1.42969H34.2656V0.363281H34.9805ZM45.3281 1.69922C45.2891 1.68359 45.2422 1.65625 45.1875 1.61719C45.1328 1.57812 45.0547 1.54297 44.9531 1.51172C44.8516 1.47266 44.7227 1.44141 44.5664 1.41797C44.4102 1.39453 44.2109 1.39062 43.9688 1.40625V0.222656C44.3125 0.230469 44.6602 0.269531 45.0117 0.339844C45.3711 0.402344 45.6602 0.503906 45.8789 0.644531C45.832 0.746094 45.7773 0.859375 45.7148 0.984375C45.6523 1.10156 45.5938 1.21484 45.5391 1.32422C45.4844 1.42578 45.4375 1.51172 45.3984 1.58203C45.3594 1.65234 45.3359 1.69141 45.3281 1.69922ZM41.2852 2.63672C41.2852 2.29297 41.3438 1.98438 41.4609 1.71094C41.5781 1.4375 41.7344 1.19922 41.9297 0.996094C42.1328 0.785156 42.3672 0.621094 42.6328 0.503906C42.9062 0.378906 43.1914 0.296875 43.4883 0.257812V1.48828C43.2383 1.57422 43.0312 1.72656 42.8672 1.94531C42.7031 2.15625 42.6211 2.37109 42.6211 2.58984C42.6211 2.89453 42.7031 3.14062 42.8672 3.32812C43.0312 3.51562 43.2383 3.67969 43.4883 3.82031V5.15625C43.2305 5.03125 42.9727 4.89844 42.7148 4.75781C42.457 4.60938 42.2227 4.4375 42.0117 4.24219C41.8008 4.04688 41.625 3.82031 41.4844 3.5625C41.3516 3.30469 41.2852 2.99609 41.2852 2.63672ZM41.4727 7.41797C41.582 7.48047 41.7188 7.54297 41.8828 7.60547C42.0547 7.66016 42.2305 7.71484 42.4102 7.76953C42.5898 7.81641 42.7695 7.85547 42.9492 7.88672C43.1289 7.91797 43.2969 7.93359 43.4531 7.93359H43.4883V9.04688H43.4648C43.2773 9.04688 43.082 9.03516 42.8789 9.01172C42.6836 8.99609 42.4844 8.96484 42.2812 8.91797C42.0781 8.87109 41.8828 8.80859 41.6953 8.73047C41.5156 8.64453 41.3594 8.54297 41.2266 8.42578L41.4727 7.41797ZM43.9688 4.05469C44.2266 4.17188 44.4883 4.29688 44.7539 4.42969C45.0273 4.5625 45.2734 4.72656 45.4922 4.92188C45.7109 5.10938 45.8906 5.33984 46.0312 5.61328C46.1719 5.88672 46.2422 6.22656 46.2422 6.63281C46.2422 6.91406 46.1875 7.1875 46.0781 7.45312C45.9766 7.71875 45.8281 7.96094 45.6328 8.17969C45.4453 8.39062 45.2109 8.57031 44.9297 8.71875C44.6484 8.86719 44.3281 8.96484 43.9688 9.01172V7.88672C44.6094 7.73047 44.9297 7.30469 44.9297 6.60938C44.9297 6.33594 44.8398 6.10938 44.6602 5.92969C44.4805 5.75 44.25 5.58203 43.9688 5.42578V4.05469ZM49.1484 0.363281V7.93359H53.1211V9H47.7188V0.363281H49.1484ZM61.6289 9H60.1758L57.9375 2.53125L55.6758 9H54.2109L57.2344 0.375H58.6289L61.6289 9ZM58.7109 6.25781L59.0508 7.20703H56.8125L57.1406 6.25781H58.7109ZM68.2617 0.363281H69.6914V9H68.2617L65.3555 3.89062V1.19531L68.2617 6.31641V0.363281ZM63.4453 9V0.363281H64.875V9H63.4453ZM71.8711 0.363281H73.3008V9H71.8711V0.363281ZM76.9102 5.10938H73.7812V4.14844H76.9102V5.10938ZM73.7812 7.93359H77.2734V9H73.7812V7.93359ZM77.2734 0.363281V1.42969H73.7812V0.363281H77.2734Z'
							fill='currentColor'
						/>
					</svg>
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
										className='font-semibold hover:text-muted-foreground'>
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
												Don &apos;t have an account?
											</Typography>
											<Button asChild className='p-0 underline' variant='link'>
												<NavLink
													className='font-normal normal-case'
													href='/register'
													label='Register'
												/>
											</Button>
										</div>
										<div className='w-full'>
											<ul className='flex flex-col gap-2'>
												<li className='flex items-center justify-between'>
													<Button asChild variant='link'>
														<NavLink href='/my-purchase' label='My purchase' />
													</Button>
													<ArrowRight size={12} />
												</li>
												<li className='flex items-center justify-between'>
													<Button asChild variant='link'>
														<NavLink href='/help' label='Help' />
													</Button>
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
							<Avatar>
								<AvatarImage
									src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
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
