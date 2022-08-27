const Button = ({
  title,
  isBrand,
  isSuccess,
  isLight,
  isDisabled,
  isSubmit,
  size,
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${
        isBrand &&
        'text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-300'
      } ${
        isSuccess &&
        'text-white bg-green-500 hover:bg-green-600 focus:ring-green-300'
      } ${
        isLight &&
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200'
      } ${
        isDisabled &&
        'bg-opacity-50 hover:bg-opacity-50 focus:ring-opacity-50 cursor-not-allowed'
      } ${
        size == 'xs'
          ? 'px-3 py-2'
          : size == 'sm'
          ? 'px-3 py-1.5'
          : size == 'base'
          ? 'px-5 py-2'
          : size == 'lg'
          ? 'px-6 py-3 text-2xl'
          : size == 'xl'
          ? 'px-9 py-4 text-2xl'
          : null
      } flex items-center justify-center font-medium focus:outline-none focus:ring-4 select-none rounded-full text-center transition-300 ${className}`}
      onClick={isDisabled ? null : onClick}
      disabled={isDisabled ? true : false}
      {...rest}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
