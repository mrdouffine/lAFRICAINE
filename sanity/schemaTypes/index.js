import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { biographyType } from './biographyType'
import { collaborationType } from './collaborationType'
import { galleryType } from './galleryType'
import { publicationType } from './publicationType'
import { quoteType } from './quoteType'
import { siteSettingsType } from './siteSettingsType'
import { boardType } from './boardType'

export const schema = {
  types: [
    // Schémas par défaut
    blockContentType,
    categoryType,
    postType,
    authorType,
    // Schémas personnalisés pour LAFRICAINE
    biographyType,
    collaborationType,
    galleryType,
    publicationType,
    quoteType,
    siteSettingsType,
    boardType,
  ],
}
