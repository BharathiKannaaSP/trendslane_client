'use client'
import React from 'react'
import FilterAndOrder from '@/components/FilterAndOrder'
import NavLink from '@/components/ui/nav-link'
import { Typography } from '@/components/ui/typography'
import { useParams } from 'next/navigation'
import { Sheet, SheetTrigger } from '../../../../components/ui/sheet'
import { Button } from '../../../../components/ui/button'
import { Label } from '../../../../components/ui/label'
import { Input } from '../../../../components/ui/input'
import { Grid3x3, Square, SquareSplitHorizontal } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
const womenSubCategories = [
	{ id: 1, label: 'All', link: '' },
	{ id: 2, label: 'Sweaters', link: 'sweaters' },
	{ id: 3, label: 'Cardigans', link: 'cardigans' },
	{ id: 4, label: 'Sweatshirts', link: 'sweatshirts' },
	{ id: 5, label: 'Turtleneck', link: 'turtleneck' },
	{ id: 6, label: '100% cashmere', link: '100-cashmere' },
	{ id: 7, label: 'Wool', link: 'wool' },
	{ id: 8, label: 'Party', link: 'party' },
	{ id: 9, label: 'Striped', link: 'striped' },
	{ id: 10, label: 'Plus sizes', link: 'plus-sizes' }
]

const CategoryPage = () => {
	const { audience, category } = useParams()
	return (
		<>
			<div className='flex flex-col gap-2 pt-6 px-8'>
				<Typography>
					{audience}'s {category}{' '}
				</Typography>
				<ul className='flex gap-4 overflow-auto whitespace-nowrap flex-wrap'>
					{womenSubCategories.map((item) => (
						<li key={item.id}>
							<NavLink
								labelSize='sm'
								label={item.label}
								href={`/c/${audience}/${category}/${item.link}`}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className='sticky top-[56px] z-20 isolate min-h-15 flex justify-between items-center w-full px-8 py-4 bg-background'>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							className='border-0 font-semibold shadow-none bg-transparent hover:bg-transparent cursor-pointer p-0'
							variant='outline'>
							FILTER AND ORDER
						</Button>
					</SheetTrigger>
					<FilterAndOrder />
				</Sheet>
				<RadioGroup defaultValue='comfortable' className='flex gap-4'>
					<div className='flex items-center gap-3'>
						<RadioGroupItem value='comfortable' id='r1' className='sr-only ' />
						<Label htmlFor='r1' className='cursor-pointer '>
							{/* <svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'>
								<title>Show few items</title>
								<path d='M21 21H3V3h18zM4 20h16V4H4z'></path>
							</svg> */}
						</Label>
					</div>

					<div className='flex items-center gap-3'>
						<RadioGroupItem value='default' id='r2' className='sr-only ' />
						<Label htmlFor='r2' className='cursor-pointer '>
							{/* <svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'>
								<title>Show more items</title>
								<path
									fill-rule='evenodd'
									d='M12.5 4H20v16h-7.5zm-1-1H21v18H3V3zm0 17H4V4h7.5z'
									clip-rule='evenodd'></path>
							</svg> */}
						</Label>
					</div>

					<div className='flex items-center gap-3'>
						<RadioGroupItem value='compact' id='r3' className='sr-only ' />
						<Label htmlFor='r3' className='cursor-pointer '>
							{/* <svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'>
								<title>Show maximum items</title>
								<path d='M3 3v18h18V3zm17 1v7.5h-7.5V4zm-8.5 0v7.5H4V4zM4 20v-7.5h7.5V20zm8.5 0v-7.5H20V20z'></path>
							</svg> */}
						</Label>
					</div>
				</RadioGroup>
			</div>
		</>
	)
}

export default CategoryPage
