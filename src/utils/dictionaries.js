import 'server-only'
 
const dictionaries = {
  en: () => import('../../public/dictionaries/en.json').then((module) => module.default),
  vi: () => import('../../public/dictionaries/vi.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()