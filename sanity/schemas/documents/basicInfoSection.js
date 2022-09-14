import { FaPen } from "react-icons/fa";

export default {
  title: "Information",
  name: "basicInfoSection",
  type: "document",
  icon: FaPen,
  fields: [
    {
      title: "Rubrik",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Beskrivning av eventet",
    },
  ],
};
