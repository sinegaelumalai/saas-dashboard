import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
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

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/day-schedule")}
            className="px-5 py-2 rounded-lg bg-white shadow"
          >
            Day
          </button>

          <button
            onClick={() => setView("week")}
            className={`px-5 py-2 rounded-lg ${view === "week"
              ? "bg-indigo-600 text-white"
              : "bg-white shadow"
              }`}
          >
            Week
          </button>

          <button
            onClick={() => setView("month")}
            className={`px-5 py-2 rounded-lg ${view === "month"
              ? "bg-indigo-600 text-white"
              : "bg-white shadow"
              }`}
          >
            Month
          </button>

          <button
            onClick={() => navigate("/year-calendar")}
            className="px-5 py-2 rounded-lg bg-white shadow hover:bg-indigo-600 hover:text-white transition"
          >
            Year
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel */}

        <div className="col-span-3 bg-white rounded-2xl shadow p-5">

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl mb-6">
            + Create Schedule
          </button>

          <Calendar
            onChange={setDate}
            value={date}
          />

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4">
              People
            </h3>

            <input
              type="text"
              placeholder="Search for People"
              className="w-full p-3 bg-gray-100 rounded-lg outline-none"
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

        {/* Right Calendar Grid */}

        <div className="col-span-9 bg-white rounded-2xl shadow">

          <div className="flex justify-between items-center p-6 border-b">

            <h3 className="font-semibold">
              December 2, 2021
            </h3>

            <div className="flex gap-3">
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>

          </div>

          <div className="grid grid-cols-7 text-center py-5 font-medium border-b">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="grid grid-cols-7">

            {[
              "29", "30", "01", "02", "03", "04", "05",
              "06", "07", "08", "09", "10", "11", "12",
              "13", "14", "15", "16", "17", "18", "19",
              "20", "21", "22", "23", "24", "25", "26",
              "27", "28", "29", "30", "31", "01", "02",
            ].map((day, index) => (
              <div
                key={index}
                className="h-32 border border-gray-300 p-3"
              >
                <div className="text-2xl text-center">
                  {day}
                </div>

                {day === "02" && (
                  <>
                    <div className="bg-cyan-400 text-white text-xs text-center rounded mt-2 py-1">
                      Free Day
                    </div>

                    <div className="bg-fuchsia-500 text-white text-xs text-center rounded mt-2 py-1">
                      Party Time
                    </div>
                  </>
                )}

                {day === "16" && (
                  <div className="bg-orange-400 text-white text-xs text-center rounded mt-2 py-1">
                    Victory Day
                  </div>
                )}

                {day === "21" && (
                  <div className="bg-pink-500 text-white text-xs text-center rounded mt-2 py-1">
                    Invited By Friends
                  </div>
                )}

                {day === "25" && (
                  <div className="bg-sky-500 text-white text-xs text-center rounded mt-2 py-1">
                    Christmas Day
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CalendarPage;