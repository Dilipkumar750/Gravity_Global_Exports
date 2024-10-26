import React, { useEffect, useState } from "react";
import productImage from "../../assets/product.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct, getImageUrl } from "../../slices/productSlice";
import { Link } from "react-router-dom";

const categories = {
  Forklift: [],
  "Amusement Equipment": [],
  "Other Machinery": [],
  "Medical Apparatus and Instruments": ["Mask machine"],
  "Engineering Machinery": [
    "Wood sawdust pellet heating fireplace",
    "Wood Pellet Mill",
    "Beach sand Cleaning Machine",
    "Brick machine",
    "Diesel Fan Heater",
    "Snow thrower",
    "Steel rebar cutting machine",
    "Rebar Bending Machine",
    "Stone crusher",
    "Forklift",
    "Lift Tables",
    "Hoisting machinery",
    "Loader machine",
    "Tracked transporter",
    "Truck crane",
    "Tricycle",
  ],
  "Food Machinery": [
    "Juicer",
    "Rice puffing machine",
    "Corn popper",
    "Popcorn Maker",
    "Sawmill",
    "Ice Machines",
    "Hot dogs egg baking Machine",
    "Donut machine",
    "Vegetable cutter",
    "Starch separator",
    "Ice cream machine",
    "Bread machine",
    "Oil press",
  ],
  "Electric Motorcycle": [],
  "Ranch Machinery": ["Sheep shears"],
  "Packaging Machine": [
    "Vacuum Packing Machines",
    "Small Sealing Machine",
    "Other packing machine",
  ],
  "Grain Processing Machinery": [],
  "Farm Machinery": [
    "Stump grinder",
    "Animal Feeders",
    "Plucker",
    "Egg Incubators",
    "Other Farm Machines",
  ],
  "Animal Husbandry Machinery": [],
  Tools: [],
  "Agricultural Product Processing Machinery": [],
  "Garden Tool": [],
  Cultivator: [],
  "Surface Drill": ["Excavator"],
  "Rubber V Belt and Timing Belts": [
    "Agricultural machinery Belt",
    "PK Belts",
    "Automotive timing Belt",
    "Industrial timing Belt",
    "Classical wrapped V belt",
    "Narrow wrapped V belt",
    "Multi Joint V common V belt",
    "Conveyer Belt",
    "Synchronous Pulley and Belt",
  ],
  "Farm Implements": [
    "Water Well Drilling Machine",
    "Walking tractor",
    "Tractor",
    "Cultivator",
    "Rice transplanter",
    "Mini mower",
    "Road snow sweeper",
    "Shellers",
    "Vegetable Seed Planter",
    "Fertilizer Spreaders",
    "Drum lawn Mower",
    "Other farm machine",
    "Balers",
    "Wheat corn seeder",
    "Rotary Tiller",
    "Subsoiler",
    "Front End Loader",
    "Potato seeder",
    "Tractor Trailer",
    "Disc Harrow",
    "Furrow Plough",
    "Harvester",
  ],
  Ungrouped: [],
};

const CategorySection = () => {
  const dispatch = useDispatch();
  const { data: allProduct } = useSelector(
    (state) => state.product.getAllProduct
  );

  const [openCategory, setOpenCategory] = useState(null);
  const [Products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    if (allProduct) {
      filterProducts();
    }
  }, [allProduct, selectedCategory, selectedSubCategory]);

  const filterProducts = () => {
    let filteredProducts = allProduct;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedSubCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.subCategory === selectedSubCategory
      );
    }

    setProducts(filteredProducts);
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setSelectedCategory(category);
    setSelectedSubCategory(null); 
  };

  const handleSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="h-full mb-10">
      <div
        className="relative text-white py-16 px-8 font-sans bg-black sm:bg-cover sm:bg-center"
        style={{ backgroundImage: `url(${productImage})` }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
          <div className="md:w-2/5 md:text-left">
            <h2 className="text-3xl mb-4 font-bold text-orange-500">
              Elevate Your Business with Quality Machinery
            </h2>
            <p className="text-base text-gray-300 font-bold">
              Explore our premium range of forklifts and medical machinery
              designed to enhance your productivity and efficiency. Enroll now
              to access exclusive offers and expert advice on the right
              equipment for your needs!
            </p>
          </div>

          <div className="md:w-1/2 flex">
            <Link to={"/Contact"}>
              <button
                type="button"
                className="bg-orange-500 text-gray-800 py-3 px-6 font-semibold rounded">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-orange-500 font-bold text-center mt-10">
        Product Categories
      </h2>
      <div className="mt-6 flex flex-col md:flex-row">
        <div className="sm:sticky top-2 h-full w-full md:w-1/4 md:mr-10 bg-white shadow-md">
          <div className="border-b border-gray-200">
            <h2 className="bg-gray-100 px-4 py-2">
              <button
                className={`flex justify-between w-full text-left text-md font-medium text-gray-700`}
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedSubCategory(null);
                  setProducts(allProduct); 
                }}>
                All Category
              </button>
            </h2>
          </div>
          {Object.keys(categories).map((category, index) => (
            <div className="border-b border-gray-200" key={index}>
              <h2 className="bg-gray-100 px-4 py-2">
                <button
                  className={`flex justify-between w-full text-left text-md font-medium text-gray-700`}
                  onClick={() => toggleCategory(category)}>
                  {category}
                  {categories[category].length > 0 && (
                    <span
                      className={`transition-transform transform text-orange-500 ${
                        openCategory === category ? "rotate-90" : ""
                      }`}>
                      ➔
                    </span>
                  )}
                </button>
              </h2>
              {categories[category].length > 0 && (
                <div
                  className={`${
                    openCategory === category ? "block" : "hidden"
                  } px-4 py-2`}>
                  <div className="text-gray-600">
                    {categories[category].map((subCategory, subIndex) => (
                      <button
                        onClick={() => handleSubCategory(subCategory)}
                        key={subIndex}
                        className="text-md mb-1 ml-4 block ">
                        {subCategory}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:w-3/4 h-fit gap-6">
          {Products?.length === 0 ? (
            <div className="text-center text-gray-600">
              No products available.
            </div>
          ) : (
            Products?.map((product, index) => {
              const imageUrl = getImageUrl(product.image);
              return (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-xl w-full md:w-60 border border-orange-500 overflow-hidden transition-transform transform hover:scale-105">
                  <div className="overflow-hidden rounded-t-xl h-64 group">
                    <img
                      src={imageUrl}
                      alt={product.title}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-60 p-4 bg-gray-100">
                    <div className="text-center flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <a href="https://wa.me/6018464154" target="blank">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                          Chat Now..
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
