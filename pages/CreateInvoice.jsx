import { FaCamera, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CreateInvoice = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* Left Side */}

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Create New Invoice
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                        <FaCamera className="text-3xl text-gray-500" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label>Invoice Id</label>
                        <input
                            className="w-full bg-gray-50 rounded-xl p-3 mt-2"
                            defaultValue="#876370"
                        />
                    </div>

                    <div>
                        <label>Date</label>

                        <div className="relative">
                            <input
                                className="w-full bg-gray-50 rounded-xl p-3 mt-2"
                                defaultValue="01/12/2021"
                            />

                            <FaCalendarAlt className="absolute right-4 top-6 text-indigo-500" />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label>Name</label>
                        <input
                            className="w-full bg-gray-50 rounded-xl p-3 mt-2"
                            placeholder="Alison G."
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            className="w-full bg-gray-50 rounded-xl p-3 mt-2"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div>
                        <label>Address</label>

                        <div className="relative">
                            <input
                                className="w-full bg-gray-50 rounded-xl p-3 mt-2"
                                placeholder="Street"
                            />

                            <FaMapMarkerAlt className="absolute right-4 top-6 text-indigo-500" />
                        </div>
                    </div>

                </div>

                {/* Product Table */}

                <h3 className="font-semibold mt-8 mb-4">
                    Product Description
                </h3>

                <table className="w-full">

                    <thead>
                        <tr className="text-left text-gray-500">
                            <th>Product</th>
                            <th>Rate</th>
                            <th>QTY</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-4 text-blue-500">
                                iPod 2021
                            </td>

                            <td>$1000</td>
                            <td>10</td>

                            <td className="text-green-600">
                                $10,000
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-4 text-blue-500">
                                Apple Macbook
                            </td>

                            <td>$1500</td>
                            <td>10</td>

                            <td className="text-green-600">
                                $15,000
                            </td>
                        </tr>

                        <tr>
                            <td className="py-4 text-blue-500">
                                iPhone 12
                            </td>

                            <td>$885</td>
                            <td>10</td>

                            <td className="text-green-600">
                                $8,850
                            </td>
                        </tr>

                    </tbody>

                </table>

                <div className="flex gap-4 mt-8">

                    <button className="flex-1 border rounded-xl py-3">
                        Send Invoice
                    </button>

                    <button className="flex-1 bg-indigo-600 text-white rounded-xl py-3">
                        Create Invoice
                    </button>

                </div>

            </div>

            {/* Right Side */}

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">
                        Preview
                    </h2>

                    <div className="flex gap-4 text-indigo-600 text-xl">
                        <span>⬇</span>
                        <span>🖨</span>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 min-h-[900px]">

                    {/* Top */}

                    <div className="flex justify-between mb-16">

                        <div>
                            <h1 className="text-6xl font-bold text-blue-600">
                                J
                            </h1>

                            <div className="mt-12">
                                <h4 className="font-semibold text-xs mb-4">
                                    RECIPIENT
                                </h4>

                                <p className="text-sm text-gray-500">
                                    JOHN SMITH
                                </p>

                                <p className="text-sm text-gray-500">
                                    4304 Liberty Avenue
                                </p>

                                <p className="text-sm text-gray-500">
                                    92680 Tustin, CA
                                </p>

                                <p className="text-sm text-gray-500">
                                    VAT no: 12345678
                                </p>

                                <p className="mt-4 text-xs text-blue-500">
                                    company.mail@gmail.com
                                </p>

                                <p className="text-xs text-blue-500">
                                    +386 714 505 8385
                                </p>
                            </div>
                        </div>

                        <div className="text-right">

                            <div className="mb-20">
                                <p className="text-xs text-gray-400">
                                    your.mail@gmail.com
                                </p>

                                <p className="text-xs text-blue-500">
                                    +386 989 271 3115
                                </p>
                            </div>

                            <h1 className="text-5xl font-bold text-gray-800">
                                Invoice
                            </h1>

                            <div className="mt-10">
                                <p className="text-xs text-gray-400">
                                    INVOICE NO.
                                </p>

                                <p className="text-sm text-gray-600">
                                    001/2021
                                </p>

                                <div className="mt-6">
                                    <p className="text-xs text-gray-400">
                                        INVOICE DATE
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        January 1, 2021
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Table */}

                    <table className="w-full text-sm">

                        <thead>
                            <tr className="text-gray-400 border-b">
                                <th className="text-left py-4">
                                    TASK DESCRIPTION
                                </th>

                                <th className="text-left">
                                    HOURS
                                </th>

                                <th className="text-left">
                                    RATE
                                </th>

                                <th className="text-right">
                                    AMOUNT
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b">
                                <td className="py-4">
                                    Website redesign
                                </td>

                                <td>60</td>

                                <td>15 USD</td>

                                <td className="text-right">
                                    900,00 USD
                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-4">
                                    Newsletter template design
                                </td>

                                <td>20</td>

                                <td>12 USD</td>

                                <td className="text-right">
                                    240,00 USD
                                </td>
                            </tr>

                        </tbody>

                    </table>

                    {/* Totals */}

                    <div className="flex justify-end mt-6">

                        <div className="w-72 space-y-4">

                            <div className="flex justify-between">
                                <span>SUBTOTAL</span>
                                <span>1140,00 USD</span>
                            </div>

                            <div className="flex justify-between">
                                <span>DISCOUNT 5%</span>
                                <span>57,00 USD</span>
                            </div>

                            <div className="flex justify-between font-bold text-blue-600 text-xl">
                                <span>TOTAL</span>
                                <span>1083,00 USD</span>
                            </div>

                        </div>

                    </div>

                    {/* Bank */}

                    <div className="text-center mt-12 text-xs text-gray-400">
                        Transfer the amount to the business account below.
                        Please include invoice number on your check.
                    </div>

                    <div className="text-center mt-4 text-sm">
                        <span className="font-semibold">
                            BANK:
                        </span>{" "}
                        FTSBUS33

                        <span className="mx-3">•</span>

                        <span className="font-semibold">
                            IBAN:
                        </span>{" "}
                        GB82-1111-2222-3333
                    </div>

                    {/* Notes */}

                    <div className="mt-16">

                        <h3 className="font-semibold mb-4">
                            NOTES
                        </h3>

                        <p className="text-xs text-gray-400 leading-6">
                            All amounts are in dollars.
                            Please make the payment within 15 days
                            from the issue date of this invoice.
                            Tax is not charged on the basis of paragraph 1
                            of Article 94 of the Value Added Tax Act.
                        </p>

                        <p className="mt-6 text-sm text-gray-500">
                            Thank you for your confidence in my work.
                        </p>

                        <p className="mt-3 text-sm">
                            Signature
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CreateInvoice;