const customers = [
    {
        id: 1,
        image: "https://i.pravatar.cc/40?img=1",
        name: "John Deo",
        email: "johndoe2211@gmail.com",
        phone: "+33757005467",
        gender: "Male",
    },
    {
        id: 2,
        image: "https://i.pravatar.cc/40?img=2",
        name: "Shelby Goode",
        email: "shelbygoode481@gmail.com",
        phone: "+33757005467",
        gender: "Female",
    },
    {
        id: 3,
        image: "https://i.pravatar.cc/40?img=3",
        name: "Robert Bacins",
        email: "robertbacins4182@q.com",
        phone: "+33757005467",
        gender: "Male",
    },
    {
        id: 4,
        image: "https://i.pravatar.cc/40?img=4",
        name: "John Carilo",
        email: "johncarilo182@q.com",
        phone: "+33757805467",
        gender: "Male",
    },
    {
        id: 5,
        image: "https://i.pravatar.cc/40?img=5",
        name: "Adriene Watson",
        email: "adrienewatson82@q.com",
        phone: "+83757305467",
        gender: "Female",
    },
    {
        id: 6,
        image: "https://i.pravatar.cc/40?img=6",
        name: "Jhon Deo",
        email: "jhondeo24823@q.com",
        phone: "+63475700546",
        gender: "Male",
    },
    {
        id: 7,
        image: "https://i.pravatar.cc/40?img=7",
        name: "Mark Ruffalo",
        email: "markruffalo3735@q.com",
        phone: "+33757005467",
        gender: "Male",
    },
    {
        id: 8,
        image: "https://i.pravatar.cc/40?img=8",
        name: "Bethany Jackson",
        email: "bethanyjackson5@q.com",
        phone: "+33757005467",
        gender: "Female",
    },
    {
        id: 9,
        image: "https://i.pravatar.cc/40?img=9",
        name: "Christine Huston",
        email: "christinehuston4@q.com",
        phone: "+33757005467",
        gender: "Male",
    },
    {
        id: 10,
        image: "https://i.pravatar.cc/40?img=10",
        name: "Anne Jacob",
        email: "annejacob2@ummoh.com",
        phone: "+33757005467",
        gender: "Male",
    },
];

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import {
    FaEllipsisH,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const Analytics = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("Male");

    const handleAddCustomer = () => {

        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone
        ) {
            toast.warning("Please fill all fields");
            return;
        }

        const newCustomer = {
            id: customerList.length + 1,
            image: "https://i.pravatar.cc/40",
            name: `${firstName} ${lastName}`,
            email,
            phone,
            gender,
        };

        setCustomerList([...customerList, newCustomer]);

        toast.success("Customer added successfully!");

        setShowForm(false);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
    };

    const [customerList, setCustomerList] = useState(customers);

    const menuRef = useRef(null);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );

        if (confirmDelete) {
            setCustomerList(
                customerList.filter(
                    (customer) => customer.id !== id
                )
            );
            toast.success("Customer deleted successfully!");
        }

        setOpenMenu(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpenMenu(null);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);
    return (
        <motion.div initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="grid grid-cols-1 xl:grid-cols-4 gap-6 ">

            {/* Left Side */}

            <div className="xl:col-span-3 bg-white p-6 rounded-2xl shadow-sm">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-3xl font-bold">
                        Customer List
                    </h1>
                    <button
                        onClick={() => {
                            console.log("Button clicked");
                            setShowForm(true);
                        }}
                        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
                    >
                        + Add Customer
                    </button>

                </div>

                <div className="space-y-3">

                    <div className="grid grid-cols-5 text-gray-500 font-semibold border-b pb-3">
                        <div>Name</div>
                        <div>Email</div>
                        <div>Phone</div>
                        <div>Gender</div>
                        <div></div>
                    </div>

                    <div>

                        {customerList.map((customer) => (

                            <div
                                key={customer.id}
                                className="bg-white rounded-2xl shadow-sm p-4 mb-3"
                            >

                                <div className="grid grid-cols-5 items-center">

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={customer.image}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />

                                        <span>{customer.name}</span>

                                    </div>

                                    <div>
                                        {customer.email}
                                    </div>

                                    <div>
                                        {customer.phone}
                                    </div>

                                    <div>

                                        <span
                                            className={`px-4 py-1 rounded-full text-sm ${customer.gender === "Male"
                                                ? "bg-blue-100 text-blue-500"
                                                : "bg-orange-100 text-orange-400"
                                                }`}
                                        >
                                            {customer.gender}
                                        </span>

                                    </div>

                                    <div
                                        className="relative"
                                        ref={menuRef}
                                    >

                                        <button
                                            onClick={() =>
                                                setOpenMenu(
                                                    openMenu === customer.id
                                                        ? null
                                                        : customer.id
                                                )
                                            }
                                            className="text-gray-400"
                                        >
                                            <FaEllipsisH />
                                        </button>

                                        {openMenu === customer.id && (

                                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg z-50">

                                                <button
                                                    onClick={() => {
                                                        toast.info(`Editing ${customer.name}`);
                                                        setOpenMenu(null);
                                                    }}
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-blue-500 hover:bg-gray-50"
                                                >
                                                    <FaEdit />
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(customer.id)}
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-50"
                                                >
                                                    <FaTrash />
                                                    Delete
                                                </button>

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* Right Side */}


            {showForm ? (

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-2xl font-semibold">
                            Add Customer
                        </h2>

                        <button
                            onClick={() => setShowForm(false)}
                            className="w-5 h-5 rounded-full bg-red-50 text-red-400 hover:bg-red-100 flex items-center justify-center text-xl"
                        >
                            ✕
                        </button>

                    </div>

                    {/* Upload Image */}
                    <div className="flex justify-center mb-8">

                        <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">

                            <span className="text-4xl text-gray-500">
                                📷
                            </span>

                        </div>

                    </div>

                    {/* Form */}

                    <div className="space-y-5">

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder="John"
                                className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Last Name
                            </label>

                            <input
                                type="text"
                                placeholder="Deo"
                                className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Phone Number
                            </label>

                            <input
                                type="text"
                                placeholder="+33757005467"
                                className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Gender
                            </label>

                            <select className="w-full h-12 bg-gray-100 rounded-lg px-4 outline-none">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <button
                            onClick={handleAddCustomer}
                            className="w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium transition"
                        >
                            Add Customer
                        </button>

                    </div>

                </div>

            ) : (
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-center">

                        <img
                            src="https://i.pravatar.cc/120?img=12"
                            alt=""
                            className="w-24 h-24 rounded-full mx-auto"
                        />

                        <h2 className="text-2xl font-semibold mt-4">
                            John Deo
                        </h2>

                        <p className="text-gray-500">
                            UI/UX Designer
                        </p>

                    </div>

                    <div className="border-t mt-6 pt-6">

                        <h3 className="font-semibold mb-4">
                            Contact Info
                        </h3>

                        <p className="mb-3">
                            📧 kajope5182@ummoh.com
                        </p>

                        <p className="mb-3">
                            📞 33757005467
                        </p>

                        <p>
                            📍 Schaumburg
                        </p>

                    </div>

                    {/* Performance */}

                    <div className="bg-gray-50 rounded-xl p-4 mt-6">

                        <h3 className="font-semibold mb-4">
                            Performance
                        </h3>

                        <div className="flex items-end gap-3 h-32">

                            <div className="w-4 h-10 bg-orange-200 rounded"></div>
                            <div className="w-4 h-20 bg-orange-400 rounded"></div>
                            <div className="w-4 h-16 bg-orange-200 rounded"></div>
                            <div className="w-4 h-28 bg-orange-300 rounded"></div>
                            <div className="w-4 h-18 bg-orange-200 rounded"></div>
                            <div className="w-4 h-32 bg-orange-400 rounded"></div>

                        </div>

                    </div>

                    {/* Bottom Cards */}

                    <div className="grid grid-cols-2 gap-4 mt-6">

                        <div className="bg-gray-50 p-4 rounded-xl text-center">

                            <div className="w-16 h-16 rounded-full border-8 border-yellow-400 mx-auto"></div>

                            <h3 className="font-bold mt-2">
                                70%
                            </h3>

                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl text-center">

                            <div className="w-16 h-16 rounded-full border-8 border-blue-500 mx-auto"></div>

                            <h3 className="font-bold mt-2">
                                60%
                            </h3>

                        </div>

                    </div>

                </div>


            )}

        </motion.div>
    );
};

export default Analytics;

