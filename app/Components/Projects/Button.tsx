type ButtonProps = {
  text: string;
  link: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      className="px-1 py-2  bg-[#10B9811A] text-[#10B981] text-xs rounded-md hover:bg-green-600 hover:text-white transition"
    >
      {text}
    </a>
  );
};

export default Button;