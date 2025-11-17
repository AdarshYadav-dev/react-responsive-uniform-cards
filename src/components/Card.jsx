

const Card = ({ image, icon, title }) => {
  return (
    <div className="relative w-full flex justify-center">

      <img src={image} alt={title} className="w-full rounded-xl" />

   
      <div className="bg-white w-72 sm:w-80 absolute top-[60%] sm:top-[300px] left-4 right-4 mx-auto p-6 rounded-2xl shadow-lg flex flex-col gap-4">

        <img
          src={icon}
          alt={title}
          className="absolute -top-10 right-6 w-12 h-12"
        />

        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-sm">
          We have over 25 years in supplying the airport sector with uniform. Find out how we can help you. Ask about airport uniform.
        </p>

        <button className="bg-orange-500 px-5 py-2 rounded-xl text-white text-[15px] font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
