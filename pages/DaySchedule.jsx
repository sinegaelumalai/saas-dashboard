import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
const people = [
  {
    name: "Eddie Lobanovskiy",
    email: "labanovskiy@gmail.com",
    image: "https://i.pravatar.cc/40?img=11",
  },
  {
    name: "Alexey Stave",
    email: "alexey@gmail.com",
    image: "https://i.pravatar.cc/40?img=12",
  },
  {
    name: "Anton Tkacheve",
    email: "tkacheve@gmail.com",
    image: "https://i.pravatar.cc/40?img=13",
  },
];

const DaySchedule = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="grid grid-cols-12 gap-6">

      {/* Left Side */}

      <div className="col-span-3 bg-white rounded-2xl shadow p-5">

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl mb-6">
          + Create Schedule
        </button>

        <Calendar />

        <div className="mt-8">

          <h3 className="font-bold text-lg mb-4">
            People
          </h3>

          <input
            type="text"
            placeholder="Search for People"
            className="w-full p-3 bg-gray-100 rounded-lg"
          />

          <div className="mt-5 space-y-4">

            {people.map((person, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <img
                  src={person.image}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <h4 className="text-sm font-medium">
                    {person.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {person.email}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <button className="w-full mt-8 border rounded-xl py-3 text-indigo-600">
            My Schedule
          </button>

        </div>

      </div>

      {/* Right Side */}

      <div className="col-span-9 bg-white rounded-2xl shadow p-6">

        <div className="flex justify-between mb-8">
          <h2 className="font-semibold text-lg">
            December 2, 2021
          </h2>

          <div className="flex gap-4">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div className="relative">

          {[
            "09.00 AM",
            "10.00 AM",
            "11.00 AM",
            "12.00 PM",
            "01.00 PM",
            "02.00 PM",
            "03.00 PM",
            "04.00 PM",
            "05.00 PM",
            "06.00 PM",
            "07.00 PM",
            "08.00 PM",
            "09.00 PM",
            "10.00 PM",
            "11.00 PM",
            "12.00 AM",
            "01.00 AM",
          ].map((time, index) => (
            <div
              key={index}
              className="flex h-14 border-b border-gray-100"
            >
              <div className="w-20 text-xs text-gray-500">
                {time}
              </div>

              <div className="flex-1"></div>
            </div>
          ))}

          {/* Events */}

          <div className="absolute top-0 left-16 bg-orange-400 text-white px-8 py-3 rounded-xl">
            Invited by friends
          </div>

          <div className="absolute top-28 left-72 bg-cyan-500 text-white px-10 py-3 rounded-xl">
            Prayer Time
          </div>

          <div className="absolute top-48 right-16 bg-orange-400 text-white px-10 py-3 rounded-xl">
            Lunch Time
          </div>

          <div className="absolute top-96 left-48 bg-green-600 text-white px-10 py-3 rounded-xl">
            Prayer Time
          </div>

          <div className="absolute bottom-36 right-36 bg-indigo-600 text-white px-10 py-3 rounded-xl">
            Dinner Time
          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default DaySchedule;