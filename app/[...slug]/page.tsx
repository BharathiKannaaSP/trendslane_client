// app/[...slug]/page.tsx
import { notFound } from 'next/navigation'
import { pagesData } from '../data/pageData'


interface PageProps {
	params: { slug?: string[] }
}

export default function Page({ params }: PageProps) {
	const slug = params.slug || []

	const DEFAULT_COUNTRY = 'in'
	const DEFAULT_LANG = 'en'

	const country = slug[0] || DEFAULT_COUNTRY
	const lang = slug[1] || DEFAULT_LANG
	const section = slug[2]
	const audience = slug[3]
	const subaudience = slug[4]
	const category = slug[5]
	const categoryId = slug[6]

	// Validate country/lang/section/audience
	const dataCountry = pagesData[country]
	if (!dataCountry) return notFound()

	const dataLang = dataCountry[lang]
	if (!dataLang) return notFound()

	const dataSection = dataLang[section]
	if (!dataSection) return notFound()

	const dataAudience = dataSection[audience]
	if (!dataAudience) return notFound()

	const isTeenOrKids = audience === 'teen' || audience === 'kids'

	let PageComponent

	if (isTeenOrKids) {
		if (!subaudience || !dataAudience[subaudience]?.component) return notFound()

		PageComponent = dataAudience[subaudience].component
	} else {
		PageComponent = dataAudience.component
	}

	if (!PageComponent) return notFound()

	// category and categoryId can be used to fetch content dynamically
	return <PageComponent />
}
