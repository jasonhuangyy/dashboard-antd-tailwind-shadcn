import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  text: string;
  link: string;
};
const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-gray-500 hover:underline flex items-center gap-1 mb-5"
    >
      <ArrowLeft size={20} /> {text}
    </Link>
  );
};

export default BackButton;
