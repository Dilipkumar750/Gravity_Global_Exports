import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../slices/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product.addProduct);

  const [image, setImage] = useState(null); // Changed from false to null
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    category: "",
    subCategory: "",
  });

  const imageHandler = (event) => {
    const file = event.target.files[0];

    // Check if a file was selected
    if (!file) {
      alert("No file selected.");
      return;
    }

    // Check if file type is PNG, JPG, JPEG, or SVG
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG, JPEG, and SVG files are allowed.");
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      setImage(file);
    };
  };

  const addProductHandler = async () => {
    dispatch(addProduct({ productDetails, image }));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    const descriptionRegex = /^[a-zA-Z0-9\s.,?]*$/;

    if (name === "description") {
      if (descriptionRegex.test(value)) {
        setProductDetails({ ...productDetails, [name]: value });
      } else {
        alert("Only letters, numbers, and basic punctuation are allowed in the description.");
      }
    } else {
      if (alphanumericRegex.test(value)) {
        setProductDetails({ ...productDetails, [name]: value });
      } else {
        alert("Only letters and numbers are allowed.");
      }
    }
  };

  const categories = {
    "All Category": [],
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
    "Tools": [],
    "Agricultural Product Processing Machinery": [],
    "Garden Tool": [],
    "Cultivator": [],
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
    "Ungrouped": [],
  };
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>
          Product Title <span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          name="title"
          value={productDetails.title}
          onChange={changeHandler}
          placeholder="Type here"
          required
        />
      </div>


      <div className="addproduct-itemfield">
        <p>Description <span style={{ color: "red" }}>*</span>
        </p>
        <textarea // Changed input to textarea for better description entry
          name="description"
          value={productDetails.description}
          onChange={changeHandler}
          placeholder="Type here"
          style={{ height: "200px", width: "100%" }}
        />
      </div>

      <div
        className="addproduct-itemfield"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* Category dropdown */}
        <div style={{ marginRight: "20px", flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product Category <span style={{ color: "red" }}>*</span> 
          </p>
          <select
            value={productDetails.category}
            name="category"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory dropdown */}
        <div style={{ flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product SubCategory</p>
          <select
            value={productDetails.subCategory}
            name="subCategory"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}
            disabled={!productDetails.category}
          >
            <option value="">Select SubCategory</option>
            {categories[productDetails.category]?.map((subcat) => (
              <option key={subcat} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Upload Image <span style={{ color: "red" }}>*</span>
        </p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt="Upload area"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        className="addproduct-btn"
        onClick={addProductHandler} // Corrected to addProductHandler
        disabled={isLoading} // Disable button during loading
      >
        {isLoading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
};

export default AddProduct;
