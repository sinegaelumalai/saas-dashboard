import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
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

const ScheduleSidebar = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-sm p-6 h-full">

      {/* Create Schedule */}

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mb-6">
        + Create Schedule
      </button>

      {/* Calendar */}

      <div className="border rounded-xl p-4">

        <div className="flex justify-between items-center mb-5">
          <h3 className="text-sm font-medium">
            December 2, 2021
          </h3>

          <div className="flex gap-3 text-gray-400">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>

        <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-4">
          <span>S</span>
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
        </div>

        <div className="grid grid-cols-7 gap-y-4 text-center text-sm">

          <span className="text-gray-300">29</span>
          <span className="text-gray-300">30</span>
          <span>1</span>
          <span>2</span>

          <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto">
            3
          </span>

          <span>4</span>
          <span>5</span>

          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>

          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>

          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>

          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>

          <span className="text-gray-300">1</span>
          <span className="text-gray-300">2</span>

        </div>

      </div>

      {/* People */}

      <h2 className="font-semibold text-xl mt-8 mb-4">
        People
      </h2>

      {/* Search */}

      <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-center gap-2 mb-5">
        <FaSearch className="text-gray-400 text-sm" />

        <input
          type="text"
          placeholder="Search for People"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* People List */}

      <div>

        {people.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-4 border-b"
          >

            <img
              src={person.image}
              alt={person.name}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h4 className="text-sm font-medium">
                {person.name}
              </h4>

              <p className="text-xs text-gray-400">
                {person.email}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Button */}

      <button className="w-full border rounded-lg py-3 text-indigo-600 mt-10">
        My Schedule
      </button>

    </motion.div>
  );
};

export default ScheduleSidebar;