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
...,
},
"nextAuthorNight": *[_type == "calendar" && event == 'authorNight' && dateTime(now()) < dateTime(calendarDate)] | order(calendarDate asc)[0]{
authorEventTitle,
authorNightDescription,
  "authorNightImage": authorNightImage.asset->url,
  "authorNightImageAlt": authorNightImage.alt,
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
  "generalImageAuthorBookClub": generalImageAuthorBookClub.asset->url,
"generalImageAuthorBookClubAlt": generalImageAuthorBookClub.alt,
    "generalImageAuthorNights": generalImageAuthorNights.asset->url,
"generalImageAuthorNightsAlt": generalImageAuthorNights.alt,
  "generalImageAuthorBookStoreNight": generalImageAuthorBookStoreNight.asset->url,
    "generalImageAuthorBookStoreNightAlt": generalImageAuthorBookStoreNight.alt,
  "imagesOfPreviousAuthorNights1": imagesOfPreviousAuthorNights[0].asset->url,
  "imagesOfPreviousAuthorNights1Alt": imagesOfPreviousAuthorNights[0].alt,
  "imagesOfPreviousAuthorNights2": imagesOfPreviousAuthorNights[1].asset->url,
  "imagesOfPreviousAuthorNights2Alt": imagesOfPreviousAuthorNights[1].alt,
  "imagesOfPreviousAuthorNights3": imagesOfPreviousAuthorNights[2].asset->url,
  "imagesOfPreviousAuthorNights3Alt": imagesOfPreviousAuthorNights[2].alt,
  "imagesOfPreviousAuthorNights4": imagesOfPreviousAuthorNights[3].asset->url,
  "imagesOfPreviousAuthorNights4Alt": imagesOfPreviousAuthorNights[3].alt,
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

export const contactPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  closestPublicTransportStop,
  directions,
  email,
  facebookUrl,
  instagramUrl,
  openingHours,
  phone,
  "outsideImageOfShop": outsideImageOfShop.asset->url,
  "outsideImageOfShopAlt": outsideImageOfShop.alt,
  },
}`

export const notFoundPageQuery = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  instagramUrl,
  openingHours,
  phone
  },
}`
