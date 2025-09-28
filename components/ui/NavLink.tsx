'use client'
import Link from 'next/link'
import { useLocation } from '../providers/LocationProvider'

interface NavLinkProps {
	label?: string
	path: string
	query?: string
}

export default function Navlink({ label, path, query }: NavLinkProps) {
	const { country, language } = useLocation()
	console.log(country, language, 'assdasdasd')

	const href = `/${country.toLocaleLowerCase()}/${language}/{}/${path}`
	console.log(href)
	// // if(query)
	return <Link href={href}>{label}</Link>
}
