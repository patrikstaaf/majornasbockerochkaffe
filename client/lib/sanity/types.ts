interface SanityDocument {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

export interface Calendar extends SanityDocument {
  authorEventTitle: string
  authorNightDescription?: string
  bookClubTitle: string
  bookClubDescription: string
  bookNightTitle: string
  bookNightDescription: string
  miscEventTitle: string
  miscEventDescription: string
  calendarDate: string
  eventTime: string
  event: string
}

interface CompanyInfo extends SanityDocument {
  address: string
  closestPublicTransportStop: string
  directions: string
  email: string
  facebookUrl: string
  heroText: string
  instagramUrl: string
  openingHours: string
  phone: string
  outsideImageOfShop: string
  outsideImageOfShopAlt: string
}

interface BookOfTheMonth extends SanityDocument {
  author: string
  description: string
  genre: string
  releaseYear: string
  title: string
  cover: string
  coverAlt: string
}

interface AboutTheStore extends SanityDocument {
  cafeImage: string
  cafeImageAlt: string
  bookStoreImage: string
  bookStoreImageAlt: string
  descriptionAboutTheBookStore: string
  descriptionAboutTheCafe: string
  descriptionAboutTheChildSection: string
  kidSectionImage1: string
  kidSectionImage2: string
  kidSectionImage3: string
  kidSectionImage1Alt: string
  kidSectionImage2Alt: string
  kidSectionImage3Alt: string
  shortDescriptionAboutTheCafe: string
  shortGeneralDescriptionAboutTheStore: string
}

interface AboutTheEvents extends SanityDocument {
  generalImageAuthorBookClub: string
  generalImageAuthorBookClubAlt: string
  generalImageAuthorNights: string
  generalImageAuthorNightsAlt: string
  generalImageAuthorBookStoreNight: string
  generalImageAuthorBookStoreNightAlt: string
  descriptionHostingAuthorNights: string
  descriptionAboutBookStoreNight: string
  descriptionAboutAttendingBookClub: string
  descriptionAboutAttendingAuthorNights: string
  shortGeneralDescriptionAboutTheEvents: string
  shortGeneralDescriptionAboutBookClub: string
  shortGeneralDescriptionAboutTheStore: string
  imagesOfPreviousAuthorNights1: string
  imagesOfPreviousAuthorNights1Alt: string
  imagesOfPreviousAuthorNights2: string
  imagesOfPreviousAuthorNights2Alt: string
  imagesOfPreviousAuthorNights3: string
  imagesOfPreviousAuthorNights3Alt: string
  imagesOfPreviousAuthorNights4: string
  imagesOfPreviousAuthorNights4Alt: string
}

interface PermanentOffer extends SanityDocument {
  image: string
  imageAlt: string
  price: string
  title: string
}

interface NextAuthorNight {
  authorEventTitle: string
  authorNightDescription: string
}

export interface Images {
  caption: string
  media_url: string
  id: number
  permalink: string
}

export interface StartPageSanityData {
  companyInfo: CompanyInfo
  bookOfTheMonth: BookOfTheMonth
  aboutTheStore: AboutTheStore
  aboutTheEvents: AboutTheEvents
  permanentOffer: PermanentOffer
  nextAuthorNight: NextAuthorNight
  calendar: Calendar[]
}

export interface EventPageSanityData {
  companyInfo: CompanyInfo
  aboutTheEvents: AboutTheEvents
  calendar: Calendar[]
}

export interface ShopPageSanityData {
  companyInfo: CompanyInfo
  permanentOffer: PermanentOffer
  aboutTheStore: AboutTheStore
}

export interface ContactPageSanityData {
  companyInfo: CompanyInfo
}

export interface NotFoundPageSanityData {
  companyInfo: CompanyInfo
}
