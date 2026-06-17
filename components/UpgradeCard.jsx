import logo from "../assets/logo.png";

const UpgradeCard = () => {
    return (
        <div className="bg-indigo-50 rounded-2xl p-4 text-center mt-10">

            <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />

            <h3 className="font-semibold mb-2">
                Premium Plan
            </h3>

            <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl w-full">
                Upgrade Now
            </button>

        </div>
    );
};

export default UpgradeCard;