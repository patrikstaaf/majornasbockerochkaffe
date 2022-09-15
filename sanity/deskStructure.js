import S from '@sanity/desk-tool/structure-builder';
import { FaPen } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';
import { MdEventSeat } from 'react-icons/md';
import { MdLocalOffer } from 'react-icons/md';

export default () =>
  S.list()
    .title('Innehåll')
    .items([
      S.listItem()
        .title('Företagsinfo')
        .icon(FaPen)
        .child(
          S.document().schemaType('companyInfo').documentId('companyInfo')
        ),
      S.listItem()
        .title('Boktips')
        .icon(FaLightbulb)
        .child(
          S.document().schemaType('bookOfTheMonth').documentId('bookOfTheMonth')
        ),
      S.listItem()
        .title('Butik & Café')
        .icon(IoStorefront)
        .child(
          S.document().schemaType('aboutTheStore').documentId('aboutTheStore')
        ),
      S.listItem()
        .title('Evenemang')
        .icon(MdEventSeat)
        .child(
          S.document().schemaType('aboutTheEvents').documentId('aboutTheEvents')
        ),
      S.listItem()
        .title('Stående Erbjudande')
        .icon(MdLocalOffer)
        .child(
          S.document().schemaType('permanentOffer').documentId('permanentOffer')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'companyInfo',
            'bookOfTheMonth',
            'aboutTheStore',
            'aboutTheEvents',
            'permanentOffer',
          ].includes(item.getId())
      ),
      // S.listItem()
      //   .title("Om")
      //   .child(
      //     S.list()
      //       .title("Om info ")
      //       .items([
      //         S.listItem().title("Om cafeét").schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om bokhandeln")
      //           .schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om barnavdelningen")
      //           .schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om författarkvällar mot författare")
      //           .schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om författarkvällar mot kunder")
      //           .schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om bokcirklar")
      //           .schemaType("basicInfoSection"),
      //         S.listItem()
      //           .title("Om bokhandelskvällar")
      //           .schemaType("basicInfoSection")
      //           .child(
      //             S.documentTypeList("basicInfoSection").title("Information")
      //           ),
      //       ])
      //   ),
    ]);
