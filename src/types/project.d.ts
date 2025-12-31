type LocaleString = {
  'pt-BR': string
  en: string
}

type LocaleArray = {
  'pt-BR': string[]
  en: string[]
}

type Project = {
  id: string
  title: LocaleString
  description: LocaleString
  technology: string
  createdAt: string
  links: { github: string; deploy: string }
  pictures: string[]
  features: LocaleArray
  team: string[]
}