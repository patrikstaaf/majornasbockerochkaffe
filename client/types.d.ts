export interface Calendar {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  authorEventTime: string
  authorEventTitle: string
  authorNightDescription: string
  calendarDate: string
  event: string
}

export interface CompanyInfo {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
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

export interface BookOfTheMonth {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  author: string
  description: string
  genre: string
  releaseYear: string
  title: string
  cover: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface AboutTheStore {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  cafeImage: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  descriptionAboutTheBookStore: string
  descriptionAboutTheCafe: string
  descriptionAboutTheChildSection: string
  generalImage: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
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

export interface AboutTheEvents {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  generalImageAuthorBookClub: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  generalImageAuthorNights: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  imagesOfPreviousAuthorNights: {
    _key: string
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }[]
  shortGeneralDescriptionAboutBookClub: string
  shortGeneralDescriptionAboutTheStore: string
}

export interface PermanentOffer {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  image: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  price: string
  title: string
}

export interface StartPageSanityData {
  companyInfo: CompanyInfo
  bookOfTheMonth: BookOfTheMonth
  aboutTheStore: AboutTheStore
  aboutTheEvents: AboutTheEvents
  permanentOffer: PermanentOffer
  calendar: Calendar[]
}
