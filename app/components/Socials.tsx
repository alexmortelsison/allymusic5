import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
export default function Socials() {
  return (
    <div className="flex space-x-2 pt-8 pb-16">
      <a href="https://www.instagram.com/officialallymusic/" target="_blank">
        <AiOutlineInstagram size={40} />
      </a>
      <a href="https://www.instagram.com/officialallymusic/" target="_blank">
        <AiOutlineFacebook size={40} />
      </a>
    </div>
  );
}
