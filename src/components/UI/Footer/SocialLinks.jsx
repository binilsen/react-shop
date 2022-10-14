import { SocialIcon } from "react-social-icons";
import { MComponents, Icons, Colors } from "../../MUIExporter";
const SocialLinks = () => {
  return (
    <MComponents.Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <MComponents.Typography variant="caption">
        Find us on:
      </MComponents.Typography>
      <SocialIcon url="https://youtube.com" />
      <SocialIcon url="https://telegram.com" />
      <SocialIcon url="https://whatsapp.com" />
      <SocialIcon url="https://facebook.com" />
      <SocialIcon url="https://instagram.com" />
    </MComponents.Stack>
  );
};
export default SocialLinks;
