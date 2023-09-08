import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Label from "../components/Label";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["location"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export default function location() {
  return <Label value="Label" />;
}
