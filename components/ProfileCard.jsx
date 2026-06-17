
import user from "../assets/user.png";
const ProfileCard = () => {
  return (
    <div className="flex items-center gap-3 mt-6">

      <img
        src={user}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100"
      />

      <div>
        <h4 className="font-medium text-sm">
          Easin Arafat
        </h4>

        <p className="text-xs text-gray-500">
          Free Account
        </p>
      </div>

    </div>
  );
};

export default ProfileCard;