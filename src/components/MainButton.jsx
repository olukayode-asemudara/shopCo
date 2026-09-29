const MainButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white md:px-14 md:py-4 rounded-full hover:cursor-pointer"
    >
      {text}
    </button>
  );
};

export default MainButton;
