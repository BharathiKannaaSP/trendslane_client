// app/data/pages.ts
import WomenHome from '../components/pages/WomenHome'
import MenHome from '../components/pages/MenHome'
import TeenHome from '../components/pages/TeenHome'
import TeenaHome from '../components/pages/TeenaHome'
import InventiveWomen from '../components/pages/InventiveWomen'

// Subaudience mapping for teen/kids
const teenSubaudience = {
	teena: { component: TeenaHome },
	teenb: { component: TeenHome }
}

const kidsSubaudience = {
	boys: { component: TeenHome },
	girls: { component: TeenHome },
	babyboys: { component: TeenHome },
	babygirls: { component: TeenHome },
	newborns: { component: TeenHome }
}

export const pagesData = {
	in: {
		en: {
			h: {
				women: { component: WomenHome },
				men: { component: MenHome },
				teen: teenSubaudience,
				kids: kidsSubaudience
			},
			i: {
				women: { component: InventiveWomen },
				men: { component: MenHome }
			},
			e: {},
			c: {}
		},
		hi: { h: {}, i: {}, e: {}, c: {} },
		ta: { h: {}, i: {}, e: {}, c: {} },
		fr: { h: {}, i: {}, e: {}, c: {} }
	},
	us: {
		en: { h: {}, i: {}, e: {}, c: {} },
		fr: { h: {}, i: {}, e: {}, c: {} }
	},
	uk: {
		en: { h: {}, i: {}, e: {}, c: {} }
	},
	fr: {
		fr: { h: {}, i: {}, e: {}, c: {} }
	}
}
