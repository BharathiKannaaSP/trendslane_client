import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Typography } from './ui/typography'
import Link from 'next/link'

const Subscribe = () => {
	return (
		<div className='px-4 mt-10'>
			<h2 className='text-center normal-case font-semibold'>
				10% off your next purchase by subscribing to the newsletter
			</h2>
			<div className='flex flex-col gap-4 justify-center items-center mt-8'>
				<form className='flex w-full max-w-sm items-center gap-2'>
					<Input type='email' required placeholder='E-mail' />
					<Button type='submit' variant='outline'>
						Subscribe
					</Button>
				</form>
				<div>
					<Typography className='normal-case'>
						By subscribing, you confirm that you have read the{' '}
						<Link className='underline' href='/privacy-policy'>
							Privacy Policy.
						</Link>
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default Subscribe
