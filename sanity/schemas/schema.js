import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import companyInfo from './documents/companyInfo';
import bookOfTheMonth from './documents/bookOfTheMonth';
import aboutTheStore from './documents/aboutTheStore';
import aboutTheEvents from './documents/aboutTheEvents';
import permanentOffer from './documents/permanentOffer';
import calendar from './documents/calendar';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    companyInfo,
    bookOfTheMonth,
    aboutTheStore,
    aboutTheEvents,
    permanentOffer,
    calendar,
  ]),
});
