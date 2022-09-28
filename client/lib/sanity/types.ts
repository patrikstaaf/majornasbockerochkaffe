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
  companyName: string
  directions: string
  email: string
  facebookUrl: string
  heroText: string
  instagramUrl: string
  openingHours: string
  phone: string
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
  descriptionAboutTheBookStore: string
  descriptionAboutTheCafe: string
  descriptionAboutTheChildSection: string
  generalImage: string
  generalImageAlt: string
  imagesOfChildSection: {
    _key: string
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }[]
  shortDescriptionAboutTheCafe: string
  shortGeneralDescriptionAboutTheStore: string
}

interface AboutTheEvents extends SanityDocument {
  generalImageAuthorBookClub: string
  generalImageAuthorBookClubAlt: string
  generalImageAuthorNights: string
  generalImageAuthorNightsAlt: string
  imagesOfPreviousAuthorNights: {
    _key: string
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }[]
  descriptionHostingAuthorNights: string
  shortGeneralDescriptionAboutTheEvents: string
  shortGeneralDescriptionAboutBookClub: string
  shortGeneralDescriptionAboutTheStore: string
}

interface PermanentOffer extends SanityDocument {
  image: string
  imageAlt: string
  price: string
  title: string
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
  calendar: Calendar[]
}

export interface EventPageSanityData {
  companyInfo: CompanyInfo
  aboutTheEvents: AboutTheEvents
  calendar: Calendar[]
}
