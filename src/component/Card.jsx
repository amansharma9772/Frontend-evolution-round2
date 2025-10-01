const Card = ({ title, description }) => {
  return (
    <div className="bg-transparent border border-gray-200 text-center rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-500 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
