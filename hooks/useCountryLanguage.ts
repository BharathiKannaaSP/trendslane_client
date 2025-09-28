// 'use client'

// import { usePathname, useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'

// export const useCountryLanguage = () => {
// 	const [country, setCountry] = useState('')
// 	const [language, setLanguage] = useState<string>('')
// 	const router = useRouter()
// 	const pathName = usePathname()

// 	useEffect(() => {
// 		const cookieCountry = Cookies.get('country')
// 		const cookieLanguage = Cookies.get('language')
// 		console.log(cookieCountry, cookieLanguage, 'jscookie')
// 		if (cookieCountry) setCountry(cookieCountry)
// 		if (cookieLanguage) setLanguage(cookieLanguage)
// 	}, [])

// 	console.log(country, language, 'Inside hook')

// 	return { country, language }
// }
