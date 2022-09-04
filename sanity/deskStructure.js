import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Innehåll')
    .items([
      S.listItem()
        .title('Företagsinfo')
        .child(
          S.document().schemaType('companyInfo').documentId('companyInfo')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['companyInfo'].includes(item.getId())
      ),
    ]);
