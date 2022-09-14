import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Innehåll")
    .items([
      S.listItem()
        .title("Företagsinfo")
        .child(
          S.document().schemaType("companyInfo").documentId("companyInfo")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["companyInfo"].includes(item.getId())
      ),
      S.listItem()
        .title("Om")
        .child(
          S.list()
            .title("Om info ")
            .items([
              S.listItem().title("Om cafeét").schemaType("basicInfoSection"),
              S.listItem()
                .title("Om bokhandeln")
                .schemaType("basicInfoSection"),
              S.listItem()
                .title("Om barnavdelningen")
                .schemaType("basicInfoSection"),
              S.listItem()
                .title("Om författarkvällar mot författare")
                .schemaType("basicInfoSection"),
              S.listItem()
                .title("Om författarkvällar mot kunder")
                .schemaType("basicInfoSection"),
              S.listItem()
                .title("Om bokcirklar")
                .schemaType("basicInfoSection"),
              S.listItem()
                .title("Om bokhandelskvällar")
                .schemaType("basicInfoSection")
                .child(
                  S.documentTypeList("basicInfoSection").title("Information")
                ),
            ])
        ),
    ]);
