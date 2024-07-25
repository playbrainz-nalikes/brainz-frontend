export const Button = ({
  variant,
  children,
  className,
  size = "text-base",
  ...props
}) => {
  const buttonStyles = {
    outlined:
      "outline-none	text-nowrap font-basement font-bold bg-transparent border border-secondary border-2 text-white font-bold py-2 rounded-full inline-flex items-center duration-200 enabled:hover:bg-secondary enabled:hover:text-dark px-10 py-1 ",
    contained:
      "outline-none	text-nowrap font-basement font-bold bg-secondary border border-secondary text-dark font-bold rounded-full inline-flex items-center duration-200 px-10 py-1 hover:bg-secondary/75",
    gradient:
      "text-nowrap text-base md:text-xl font-basement font-bold bg-gradient-to-r from-[#2e414e] to-[#132836] text-white font-bold rounded-[10px] inline-flex items-center duration-200 px-10 py-3 hover:opacity-75",
    outlinedWhite:
      "outline-none	text-nowrap justify-center text-center font-basement font-bold bg-transparent border border-white border-2 text-white font-bold py-2 rounded-full inline-flex items-center duration-200 hover:bg-white hover:text-dark px-10 py-1",
  };

  const style = buttonStyles[variant] || buttonStyles.contained;

  return (
    <button className={`${style} ${size} ${className}`} {...props}>
      {children}
    </button>
  );
};
