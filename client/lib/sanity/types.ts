interface SanityDocument {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

export interface Calendar extends SanityDocument {
  authorEventTime?: string
  authorEventTitle: string
  authorNightDescription?: string
  bookClubTime?: string
  bookClubTitle: string
  bookClubDescription?: string
  bookNightTitle: string
  bookNightTime?: string
  bookNightDescription?: string
  miscEventTitle: string
  miscEventTime?: string
  miscEventDescription?: string
  calendarDate: string
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
  cover: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

interface AboutTheStore extends SanityDocument {
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

interface AboutTheEvents extends SanityDocument {
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

interface PermanentOffer extends SanityDocument {
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
