// import { useState, useRef } from "react";
// import axios from "axios";
// import { MyContext } from "../UseContext";
// import { useContext } from "react";
// import Login from "../Login";
// import { useNavigate } from "react-router-dom";

// function LaptopCharger() {
//   const { LoginState } = useContext(MyContext);
//   const navigate=useNavigate();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const imageBattery = useRef();
//   const [preview, setPreview] = useState(null);

//   // Change image preview
//   function ImageChange() {
//     const files = imageBattery.current.files[0];
//     if (files) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result);
//       reader.readAsDataURL(files);
//     }
//   }

//   // Handle input change
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }

//   // Save and Continue
//   function saveAndContinue() {
//     if (currentStep < 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   }

//   // Submit the form
//   function Submit() {
//     const finalData = new FormData();

//     // Append form data correctly
//     Object.keys(formData).forEach((key) => {
//       finalData.append(key, formData[key]);
//     });

//     // Append image only if a file is selected
//     if (imageBattery.current && imageBattery.current.files[0]) {
//       finalData.append("MobileBatteryImage", imageBattery.current.files[0]);
//     }
//     console.log([...finalData]); // Debugging: Log all form data before submitting

//     axios
//       .post("https://backendwith-frontend.vercel.app/api/ChargingMobile", finalData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then((response) => {
//         console.log(response.data);
//         alert("Form submitted successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Failed to submit the form. Please try again.");
//       });
//   }

//   const firstSetFields = [
//     { label: "Series", name: "Series" },
//     { label: "Price", name: "Price" },
//     { label: "Brand Name", name: "BrandName" },
//     { label: "Colour", name: "Colour" },
//     { label: "Form Factor", name: "FormFactor" },
//     { label: "Item Height", name: "ItemHeight" },
//     { label: "Product Dimensions", name: "ProductDimensions" },
//     { label: "Batteries Power", name: "BatteriesPower" },
//     { label: "Item Model Number", name: "ItemModelNumber" },
//     { label: "Material", name: "Material" },
//     { label: "Charging Speed", name: "ChargingSpeed" },
//     { label: "Voltage", name: "Voltage" },
//     { label: "Manufacturer", name: "Manufacturer" },
//     { label: "warranty", name: "warranty" },
//   ];

//   const secondSetFields = [
//     { label: "Included Components", name: "IncludedComponents" },
//     { label: "Country of Origin", name: "CountryOfOrigin" },
//     { label: "Item Weight", name: "ItemWeight" },
//   ];

//   return (
//     <div>
//       {LoginState ? (
//         <div className="grid-container">
//           <div className="grid-x grid-padding-x align-center">
//             <div className="cell medium-8 large-6">
//             <button
//                 onClick={() => navigate(-1)}
//                 style={{
//                   marginBottom: "15px",
//                   backgroundColor: "#ccc",
//                   border: "none",
//                   padding: "8px 12px",
//                   cursor: "pointer",
//                 }}
//               >
//                 ⬅ Back
//               </button>
//               <h2 className="text-center">Upload Laptop Charger Information</h2>
//               <div className="callout">
//                 {currentStep === 1 &&
//                   firstSetFields.map((field) => (
//                     <label key={field.name}>
//                       {field.label}
//                       <input
//                         type="text"
//                         name={field.name} // Corrected naming
//                         placeholder={`Enter ${field.label}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 &&
//                   secondSetFields.map((field) => (
//                     <label key={field.name}>
//                       {field.label}
//                       <input
//                         type="text"
//                         name={field.name} // Corrected naming
//                         placeholder={`Enter ${field.label}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 && (
//                   <label>
//                     Upload Image
//                     <input
//                       type="file"
//                       ref={imageBattery}
//                       onChange={ImageChange}
//                       className="input-group-field"
//                     />
//                   </label>
//                 )}
//                 {preview && currentStep === 2 && (
//                   <div className="text-center">
//                     <img
//                       src={preview}
//                       alt="Preview"
//                       style={{ width: "100px", marginTop: "10px" }}
//                     />
//                   </div>
//                 )}
//                 {currentStep === 1 && (
//                   <button onClick={saveAndContinue} className="button expanded">
//                     Save and Continue
//                   </button>
//                 )}
//                 {currentStep === 2 && (
//                   <button onClick={Submit} className="button expanded">
//                     Submit
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <p className="text-center">Please login before uploading a LaptopCharger</p>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// }
// export default LaptopCharger;
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { MyContext } from "../UseContext";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function LaptopCharger() {
  const navigate = useNavigate();
  const { LoginState } = useContext(MyContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const imagelaptopCharger = useRef();

  // Handle image selection
  function handleImageChange(event) {
    const files = Array.from(event.target.files);

    if (selectedImages.length + files.length > 4) {
      alert("You can only upload up to 4 images.");
      return;
    }

    setSelectedImages((prevImages) => [...prevImages, ...files]);
  }

  // Remove selected image
  function removeImage(index) {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  // Handle input change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Save and Continue
  function saveAndContinue() {
    if (Object.keys(formData).length < 5) {
      alert("Please fill at least 5 fields before proceeding.");
      return;
    }
    setCurrentStep(2);
  }

  // Submit the form
  function handleSubmit() {
    if (selectedImages.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    const finalData = new FormData();

    // Append text data
    Object.keys(formData).forEach((key) => finalData.append(key, formData[key]));

    // Append images
    selectedImages.forEach((file) => finalData.append("laptopChargerImages", file));

    axios
      // .post("http://localhost:5007/api/laptopCharger", finalData, {
      .post("https://backendwith-frontend.vercel.app/api/laptopCharger", finalData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("laptopCharger details uploaded successfully!");
        navigate("/Watches-list");
      })
      .catch((error) => {
        console.error(error);
        alert("Error submitting the form. Please try again.");
      });
  }

  const firstStepFields = [
    "series","colour", "price","brandname" 
    ,"formFactor", "itemHeight", "productDimensions", "itemModelNumber",
    "voltage", "chargingSpeed", "ComponentsIncluded", "specialfeatures",
  ];

  const secondStepFields = [
   "manufacturer", "countryoforigin", "itemweight", "laptopChargerImages",
  ];

  return (
    <div className="container">
      {LoginState ? (
        <div className="form-container">
          <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
          <h2 className="text-center">Upload LaptopCharger Details</h2>

          {/* Step 1 - Basic Laptop Details */}
          {currentStep === 1 && firstStepFields.map((field) => (
            <label key={field}>
              {field}
              <input
                type="text"
                name={field.toLowerCase().replace(/\s+/g, "_")}
                placeholder={`Enter ${field}`}
                onChange={handleChange}
                required
              />
            </label>
          ))}

          {/* Step 2 - Advanced Watch Details & Image Upload */}
          {currentStep === 2 && (
            <>
              {secondStepFields.map((field) => (
                <label key={field}>
                  {field}
                  <input
                    type="text"
                    name={field.toLowerCase().replace(/\s+/g, "_")}
                    placeholder={`Enter ${field}`}
                    onChange={handleChange}
                    required
                  />
                </label>
              ))}

              {/* Image Upload Section */}
              <label>Upload LaptopCharger Images (Max 4)
                <input
                  type="file"
                  ref={imagelaptopCharger}
                  onChange={handleImageChange}
                  multiple
                  accept="image/*"
                />
              </label>

              {/* Image Previews in Row */}
              <div className="image-preview">
                {selectedImages.map((file, index) => (
                  <div key={index} className="image-container">
                    <img src={URL.createObjectURL(file)} alt="Preview" className="preview-image" />
                    <button className="remove-btn" onClick={() => removeImage(index)}>X</button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="button-group">
            {currentStep === 1 && <button onClick={saveAndContinue} className="btn">Save and Continue</button>}
            {currentStep === 2 && <button onClick={handleSubmit} className="btn submit-btn">Submit</button>}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center">Please login before uploading a LaptopCharger</p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default LaptopCharger;