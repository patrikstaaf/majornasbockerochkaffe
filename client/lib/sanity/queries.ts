export const startPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  heroText,
  instagramUrl,
  openingHours,
  phone
  },
  "bookOfTheMonth": *[_type == "bookOfTheMonth"][0]{
  "cover": cover.asset->url,
  "coverAlt": cover.alt,
  author,
  description,
  genre,
  releaseYear,
  title,
  },
"aboutTheStore": *[_type == "aboutTheStore"][0]{
  shortGeneralDescriptionAboutTheStore,
  "generalImage": generalImage.asset->url,
  "generalImageAlt": generalImage.alt,
shortDescriptionAboutTheCafe,
  "cafeImage": cafeImage.asset->url,
  "cafeImageAlt": cafeImage.alt,
},
"permanentOffer": *[_type == "permanentOffer"][0]{
title,
price,
  "image": image.asset->url,
  "imageAlt": image.alt,
},
"aboutTheEvents": *[_type == "aboutTheEvents"][0]{
descriptionHostingAuthorNights,
 shortGeneralDescriptionAboutBookClub,
  shortGeneralDescriptionAboutTheStore,
  shortGeneralDescriptionAboutTheEvents,
  descriptionHostingAuthorNights,
  "generalImageAuthorBookClub": generalImageAuthorBookClub.asset->url,
"generalImageAuthorBookClubAlt": generalImageAuthorBookClub.alt,
    "generalImageAuthorNights": generalImageAuthorNights.asset->url,
"generalImageAuthorNightsAlt": generalImageAuthorNights.alt,
},
"calendar": *[_type == "calendar" && dateTime(now()) < dateTime(calendarDate)] | order(calendarDate asc)[0..4]{
...
},
"nextAuthorNight": *[_type == "calendar" && event == 'authorNight' && dateTime(now()) < dateTime(calendarDate)] | order(calendarDate asc)[0]{
authorEventTitle,
authorNightDescription
},
}`

export const eventPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  heroText,
  instagramUrl,
  openingHours,
  phone
  },
"aboutTheEvents": *[_type == "aboutTheEvents"][0]{
descriptionHostingAuthorNights,
  descriptionAboutAttendingAuthorNights,
  descriptionAboutAttendingBookClub,
  descriptionAboutBookStoreNight,
  imagesOfPreviousAuthorNights,
  "generalImageAuthorBookClub": generalImageAuthorBookClub.asset->url,
"generalImageAuthorBookClubAlt": generalImageAuthorBookClub.alt,
    "generalImageAuthorNights": generalImageAuthorNights.asset->url,
"generalImageAuthorNightsAlt": generalImageAuthorNights.alt,
  "generalImageAuthorBookStoreNight": generalImageAuthorBookStoreNight.asset->url,
    "generalImageAuthorBookStoreNight": generalImageAuthorBookStoreNight.alt,
},
"calendar": *[_type == "calendar" && dateTime(now()) < dateTime(calendarDate)] | order(calendarDate asc){
...
},
}`

export const shopPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  heroText,
  instagramUrl,
  openingHours,
  phone
  },
"aboutTheStore": *[_type == "aboutTheStore"][0]{
  descriptionAboutTheBookStore,
  descriptionAboutTheCafe,
  descriptionAboutTheChildSection,
  "generalImage": generalImage.asset->url,
  "generalImageAlt": generalImage.alt,
  "cafeImage": cafeImage.asset->url,
  "cafeImageAlt": cafeImage.alt,
  "bookStoreImage": bookStoreImage.asset->url,
  "bookStoreImageAlt": bookStoreImage.alt,
  "kidSectionImage1": imagesOfChildSection[0].asset->url,
  "kidSectionImage1Alt": imagesOfChildSection[0].alt,
 "kidSectionImage2": imagesOfChildSection[1].asset->url,
  "kidSectionImage2Alt": imagesOfChildSection[1].alt,
 "kidSectionImage3": imagesOfChildSection[2].asset->url,
  "kidSectionImage3Alt": imagesOfChildSection[2].alt,
},
"permanentOffer": *[_type == "permanentOffer"][0]{
title,
price,
  "image": image.asset->url,
  "imageAlt": image.alt,
},
}`

export const notFoundPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  heroText,
  instagramUrl,
  openingHours,
  phone
  },
}`
