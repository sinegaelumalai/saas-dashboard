import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

const months = [
  "January 2021",
  "February 2021",
  "March 2021",
  "April 2021",
  "May 2021",
  "June 2021",
  "July 2021",
  "August 2021",
  "September 2021",
  "October 2021",
  "November 2021",
  "December 2021",
];

const YearCalendar = () => {
  return (
    <div className="grid grid-cols-12 gap-6">

      {/* Left Sidebar */}

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

        <div className="grid grid-cols-3 gap-6">

          {months.map((month, index) => (
            <div
              key={index}
              className="border-r border-b border-gray-100 pb-6"
            >
              <h3 className="font-semibold mb-4">
                {month}
              </h3>

              <Calendar
                defaultView="month"
                showNavigation={false}
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default YearCalendar;