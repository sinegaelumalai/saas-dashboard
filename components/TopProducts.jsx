import shoes from "../assets/shoew.png";
import iphone from "../assets/iphone.png";

const products = [
  {
    id: 1,
    name: "NIKE Shoes Black Pattern",
    price: "$87",
    image: shoes,
  },
  {
    id: 2,
    name: "iPhone 12",
    price: "$987",
    image: iphone,
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">

      <h3 className="text-2xl font-semibold mb-6">
        Top Selling Products
      </h3>

      <div className="space-y-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-5 w-full p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
          >

            {/* Product Image */}

            <div className="w-30 h-30 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">

              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain"
              />

            </div>

            {/* Product Details */}

            <div className="flex-1">

              <h4 className="text-md font-semibold text-gray-800 leading-6">
                {product.name}
              </h4>

              <p className="text-yellow-500 text-lg mt-2">
                ★★★★★
              </p>

              <p className="text-xl font-bold mt-2 text-gray-900">
                {product.price}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TopProducts;