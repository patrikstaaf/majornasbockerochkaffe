export interface CalendarData {
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

export interface StartPageSanityData {
  companyInfo: {
    address: string
    email: string
    facebookUrl: string
    heroText: string
    instagramUrl: string
    openingHours: string
    phone: string
  }
  bookOfTheMonth: {
    cover: string
    coverAlt: string
    author: string
    description: string
    genre: string
    releaseYear: string
    title: string
  }
  aboutTheStore: {
    shortGeneralDescriptionAboutTheStore: string
    generalImage: string
    generalImageAlt: string
    shortDescriptionAboutTheCafe: string
    cafeImage: string
    cafeImageAlt: string
  }
  permanentOffer: {
    title: string
    price: string
    image: string
    imageAlt: string
  }
  aboutTheEvents: {
    descriptionHostingAuthorNights: string
    shortGeneralDescriptionAboutBookClub: string
    generalImageAuthorBookClub: string
    generalImageAuthorBookClubAlt: string
    generalImageAuthorNights: string
    generalImageAuthorNightsAlt: string
  }

  calendar: CalendarData[]
}
