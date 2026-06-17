import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaEllipsisH,
    FaStar,
    FaRegStar,
    FaSearch,
    FaCalendarAlt,
    FaEnvelope,
} from "react-icons/fa";

const InvoiceList = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();
    const menuRef = useRef();

    const [invoices, setInvoices] = useState([
        {
            id: "#876364",
            image: "https://i.pravatar.cc/40?img=11",
            name: "Arroar Gaur",
            email: "arroargaur@gmail.com",
            date: "12 Dec, 2020",
            status: "Complete",
            star: true,
        },
        {
            id: "#876123",
            image: "https://i.pravatar.cc/40?img=12",
            name: "James Mullican",
            email: "jamesmullican@gmail.com",
            date: "10 Dec, 2020",
            status: "Pending",
            star: true,
        },
        {
            id: "#876213",
            image: "https://i.pravatar.cc/40?img=13",
            name: "Robert Bacins",
            email: "robertbacins@gmail.com",
            date: "09 Dec, 2020",
            status: "Complete",
            star: false,
        },
        {
            id: "#876987",
            image: "https://i.pravatar.cc/40?img=14",
            name: "Bethany Jackson",
            email: "bethanyjackson@gmail.com",
            date: "09 Dec, 2020",
            status: "Cancel",
            star: false,
        },
        {
            id: "#871345",
            image: "https://i.pravatar.cc/40?img=15",
            name: "Anne Jacob",
            email: "annejacob@gmail.com",
            date: "10 Dec, 2020",
            status: "Complete",
            star: false,
        },
        {
            id: "#872345",
            image: "https://i.pravatar.cc/40?img=16",
            name: "Bethany Jackson",
            email: "bethanyjackson@gmail.com",
            date: "10 Dec, 2020",
            status: "Pending",
            star: true,
        },
        {
            id: "#872346",
            image: "https://i.pravatar.cc/40?img=17",
            name: "James Mullican",
            email: "jamesmullican@gmail.com",
            date: "10 Dec, 2020",
            status: "Complete",
            star: false,
        },
        {
            id: "#873245",
            image: "https://i.pravatar.cc/40?img=18",
            name: "Jhon Deo",
            email: "jhondeo32@gmail.com",
            date: "08 Dec, 2020",
            status: "Complete",
            star: true,
        },
        {
            id: "#876364",
            image: "https://i.pravatar.cc/40?img=19",
            name: "Bethany Jackson",
            email: "bethanyjackson@gmail.com",
            date: "02 Dec, 2020",
            status: "Cancel",
            star: true,
        },
        {
            id: "#878769",
            image: "https://i.pravatar.cc/40?img=20",
            name: "James Mullican",
            email: "jamesmullican@gmail.com",
            date: "01 Dec, 2020",
            status: "Pending",
            star: false,
        },
    ]);
    useEffect(() => {
        const closeMenu = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", closeMenu);

        return () => {
            document.removeEventListener(
                "mousedown",
                closeMenu
            );
        };
    }, []);

    const deleteInvoice = (id) => {
        setInvoices(
            invoices.filter((item) => item.id !== id)
        );

        setOpenMenu(null);
    };

    return (
        <motion.div initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div className="flex gap-4">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-3 rounded-xl bg-white shadow outline-none"
                        />

                        <FaSearch className="absolute left-4 top-4 text-gray-400" />

                    </div>

                    <button
                        onClick={() => navigate("/create-invoice")}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
                    >
                        + Add New
                    </button>

                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow p-4">

                <table className="w-full">

                    <thead>

                        <tr className="text-gray-500 text-sm">

                            <th className="text-left p-4">
                                <input type="checkbox" />
                            </th>

                            <th className="text-left p-4">
                                Invoice Id
                            </th>

                            <th className="text-left p-4">
                                Name
                            </th>

                            <th className="text-left p-4">
                                Email
                            </th>

                            <th className="text-left p-4">
                                Date
                            </th>

                            <th className="text-left p-4">
                                Status
                            </th>

                            <th className="text-left p-4">
                                Favorite
                            </th>

                            <th className="text-left p-4">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {invoices.map((item, index) => (

                            <tr
                                key={index}
                                className="bg-white rounded-3xl shadow p-4"
                            >

                                <td className="p-4">
                                    <input type="checkbox" />
                                </td>

                                <td className="p-4 font-medium">
                                    {item.id}
                                </td>

                                <td className="p-4">

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />

                                        {item.name}

                                    </div>

                                </td>

                                <td className="p-4">

                                    <div className="flex items-center gap-2">

                                        <FaEnvelope className="text-green-500" />

                                        {item.email}

                                    </div>

                                </td>

                                <td className="p-4">

                                    <div className="flex items-center gap-2">

                                        <FaCalendarAlt className="text-blue-500" />

                                        {item.date}

                                    </div>

                                </td>

                                <td className="p-4">

                                    <span
                                        className={`px-5 py-2 rounded-full text-sm font-medium
                    ${item.status === "Complete"
                                                ? "bg-green-100 text-green-600"
                                                : item.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-500"
                                            }`}
                                    >
                                        {item.status}
                                    </span>

                                </td>

                                <td className="p-4">

                                    {item.star ? (
                                        <FaStar className="text-yellow-400 text-lg" />
                                    ) : (
                                        <FaRegStar className="text-gray-300 text-lg" />
                                    )}

                                </td>

                                <td className="p-4 relative">

                                    <button
                                        onClick={() =>
                                            setOpenMenu(
                                                openMenu === item.id
                                                    ? null
                                                    : item.id
                                            )
                                        }
                                    >
                                        <FaEllipsisH />
                                    </button>

                                    {openMenu === item.id && (

                                        <div
                                            ref={menuRef}
                                            className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg z-50"
                                        >

                                            <button
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                                onClick={() => {
                                                    alert("Edit Invoice");
                                                    setOpenMenu(null);
                                                }}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                                                onClick={() =>
                                                    deleteInvoice(item.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </motion.div>
    );
};

export default InvoiceList;