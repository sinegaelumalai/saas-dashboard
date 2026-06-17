const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-all">

      <div>
        <h4 className="text-gray-500 text-sm">
          {title}
        </h4>

        <h2 className="text-2xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

    </div>
  );
};

export default StatCard;