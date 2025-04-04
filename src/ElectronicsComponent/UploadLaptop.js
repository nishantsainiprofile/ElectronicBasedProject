// import { useState, useRef } from "react";
// import axios from "axios";
// import { MyContext } from "../UseContext";
// import { useContext } from "react";
// import Login from "../Login";
// import { useNavigate } from "react-router-dom";


// function BuildLaptop() {
//   const navigate = useNavigate();

//   const { LoginState } = useContext(MyContext);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const imageLaptop = useRef();
//   const [preview, setPreview] = useState(null);

//   // Change image preview
//   function ImageChange() {
//     const files = imageLaptop.current.files[0];
//     if (files) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result);
//       reader.readAsDataURL(files);
//     }
//   }
//   const previewArray = [];
//   Array.from(files).forEach((file) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       previewArray.push(reader.result);
//       if (previewArray.length === files.length) {
//         setPreviews(previewArray);
//       }
//     };
//     reader.readAsDataURL(file);
//   });
// }

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

//     // Append form data
//     Object.keys(formData).forEach((key) => {
//       finalData.append(key, formData[key]);
//     });

//     // Append image only if a file is selected
//     if (imageLaptops.current && imageLaptops.current.files.length > 0) {
//       Array.from(imageLaptops.current.files).forEach((file) => {
//         finalData.append("laptopImages", file);
//       });
//     }

//     axios
//       .post("https://backendwith-frontend.vercel.app/api/BuildLaptop", finalData, {
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
//     "Series",
//     "Colour",
//     "Form Factor",
//     "Item Height",
//     "Standing screen display size",
//     "Screen Resolution",
//     "Resolution",
//     "Product Dimensions",
//     "Batteries",
//     "Item model number",
//     "Processor Brand",
//     "Processor Type",
//     "Processor Speed",
//     "Processor Count",
//     "RAM Size",
//     "Memory Technology",
//     "Maximum Memory Supported",
//     "Hard Drive Size",
//     "Hard Disk Description",
//     "Hard Drive Interface",
//     "Audio Details",
//   ];

//   const secondSetFields = [
//     "Graphics Coprocessor",
//     "Graphics Chipset Brand",
//     "Graphics RAM Type",
//     "Graphics Card Interface",
//     "Connectivity Type",
//     "Wireless Type",
//     "Number of HDMI Ports",
//     "Voltage",
//     "Operating System",
//     "Are Batteries Included",
//     "Lithium Battery Energy Content",
//     "Number of Lithium Ion Cells",
//     "Included Components",
//     "Manufacturer",
//     "Country of Origin",
//     "Item Weight",
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
//               <h2 className="text-center">Upload Laptop Information</h2>
//               <div className="callout">
//                 {currentStep === 1 &&
//                   firstSetFields.map((field) => (
//                     <label key={field}>
//                       {field}
//                       <input
//                         type="text"
//                         name={field.toLowerCase().replace(/\s+/g, "")}
//                         placeholder={`Enter ${field}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 &&
//                   secondSetFields.map((field) => (
//                     <label key={field}>
//                       {field}
//                       <input
//                         type="text"
//                         name={field.toLowerCase().replace(/\s+/g, "")}
//                         placeholder={`Enter ${field}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 && (
//                   <label>
//                     Image Laptop
//                     <input
//                       type="file"
//                       ref={imageLaptop}
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
//           <p className="text-center">Please login before uploading a laptop</p>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// }

// export default BuildLaptop;

// import { useState, useRef } from "react";
// import axios from "axios";
// import { MyContext } from "../UseContext";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Login from "../Login";

// function BuildLaptop() {
//   const { LoginState } = useContext(MyContext);
//   const navigate = useNavigate();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const imageLaptop = useRef();
//   const [preview, setPreview] = useState(null);

//   function ImageChange() {
//     const files = imageLaptop.current.files[0];
//     if (files) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result);
//       reader.readAsDataURL(files);
//     }
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }

//   function saveAndContinue() {
//     if (currentStep < 2) {
//       setCurrentStep(currentStep + 1);
//     }
//   }

//   function Submit() {
//     const finalData = new FormData();
//     Object.keys(formData).forEach((key) => {
//       finalData.append(key, formData[key]);
//     });

//     if (imageLaptop.current && imageLaptop.current.files[0]) {
//       finalData.append("LaptopImage", imageLaptop.current.files[0]);
//     }

//     axios
//       .post("http://localhost:5002/api/BuildLaptop", finalData, {
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

//   const firstSetFields = [/*... your fields ...*/];
//   const secondSetFields = [/*... your fields ...*/];

//   return (
//     <div>
//       {LoginState ? (
//         <div className="grid-container">
//           <div className="grid-x grid-padding-x align-center">
//             <div className="cell medium-8 large-6">
//               {/* BACK BUTTON */}
//               <button
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

//               <h2 className="text-center">Upload Laptop Information</h2>
//               <div className="callout">
//                 {currentStep === 1 &&
//                   firstSetFields.map((field) => (
//                     <label key={field}>
//                       {field}
//                       <input
//                         type="text"
//                         name={field.toLowerCase().replace(/\s+/g, "")}
//                         placeholder={`Enter ${field}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 &&
//                   secondSetFields.map((field) => (
//                     <label key={field}>
//                       {field}
//                       <input
//                         type="text"
//                         name={field.toLowerCase().replace(/\s+/g, "")}
//                         placeholder={`Enter ${field}`}
//                         onChange={handleChange}
//                         className="input-group-field"
//                       />
//                     </label>
//                   ))}
//                 {currentStep === 2 && (
//                   <label>
//                     Image Laptop
//                     <input
//                       type="file"
//                       ref={imageLaptop}
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
//           <p className="text-center">Please login before uploading a laptop</p>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// }

// export default BuildLaptop;


// import { useState, useRef } from "react";
// import axios from "axios";
// import { MyContext } from "../UseContext";
// import { useContext } from "react";
// import Login from "../Login";
// import { useNavigate } from "react-router-dom";

// function BuildLaptop() {
//   const navigate = useNavigate();
//   const { LoginState } = useContext(MyContext);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const imageLaptop = useRef();
//   const [previews, setPreviews] = useState([]);

//   // Change image preview for multiple files
//   function ImageChange() {
//     const files = imageLaptop.current.files;
//     if (files.length > 0) {
//       const previewArray = [];
//       Array.from(files).forEach((file) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           previewArray.push(reader.result);
//           if (previewArray.length === files.length) {
//             setPreviews(previewArray);
//           }
//         };
//         reader.readAsDataURL(file);
//       });
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
//     Object.keys(formData).forEach((key) => {
//       finalData.append(key, formData[key]);
//     });

//     if (imageLaptop.current && imageLaptop.current.files.length > 0) {
//       console.log(imageLaptop.current.files)
//       Array.from(imageLaptop.current.files).forEach((file) => {
//         finalData.append("laptopImages", file);
//       });
//     }
//     console.log(finalData);

//     axios
//       .post("https://backendwith-frontend.vercel.app/api/BuildLaptop", finalData, {
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
//     "Series", "Colour", "Form Factor", "Item Height", "Standing screen display size",
//     "Screen Resolution", "Resolution", "Product Dimensions", "Batteries", "Item model number",
//     "Processor Brand", "Processor Type", "Processor Speed", "Processor Count", "RAM Size",
//     "Memory Technology", "Maximum Memory Supported", "Hard Drive Size", "Hard Disk Description",
//     "Hard Drive Interface", "Audio Details"
//   ];

//   const secondSetFields = [
//     "Graphics Coprocessor", "Graphics Chipset Brand", "Graphics RAM Type", "Graphics Card Interface",
//     "Connectivity Type", "Wireless Type", "Number of HDMI Ports", "Voltage", "Operating System",
//     "Are Batteries Included", "Lithium Battery Energy Content", "Number of Lithium Ion Cells",
//     "Included Components", "Manufacturer", "Country of Origin", "Item Weight"
//   ];

//   return (
//     <div>
//       {LoginState ? (
//         <div className="grid-container">
//           <div className="grid-x grid-padding-x align-center">
//             <div className="cell medium-8 large-6">
//               <button
//                 onClick={() => navigate(-1)}
//                 style={{ marginBottom: "15px", backgroundColor: "#ccc", border: "none", padding: "8px 12px", cursor: "pointer" }}
//               >⬅ Back</button>
//               <h2 className="text-center">Upload Laptop Information</h2>
//               <div className="callout">
//                 {currentStep === 1 && firstSetFields.map((field) => (
//                   <label key={field}>
//                     {field}
//                     <input
//                       type="text"
//                       name={field.toLowerCase().replace(/\s+/g, "")}
//                       placeholder={`Enter ${field}`}
//                       onChange={handleChange}
//                       className="input-group-field"
//                     />
//                   </label>
//                 ))}
//                 {currentStep === 2 && secondSetFields.map((field) => (
//                   <label key={field}>
//                     {field}
//                     <input
//                       type="text"
//                       name={field.toLowerCase().replace(/\s+/g, "")}
//                       placeholder={`Enter ${field}`}
//                       onChange={handleChange}
//                       className="input-group-field"
//                     />
//                   </label>
//                 ))}
//                 {currentStep === 2 && (
//                   <label>
//                     Image Laptop
//                     <input type="file" ref={imageLaptop} onChange={ImageChange} multiple className="input-group-field" />
//                   </label>
//                 )}
//                 {previews.length > 0 && currentStep === 2 && (
//                   <div className="text-center">
//                     {previews.map((src, index) => (
//                       <img key={index} src={src} alt="Preview" style={{ width: "100px", margin: "10px" }} />
//                     ))}
//                   </div>
//                 )}
//                 {currentStep === 1 && (
//                   <button onClick={saveAndContinue} className="button expanded">Save and Continue</button>
//                 )}
//                 {currentStep === 2 && (
//                   <button onClick={Submit} className="button expanded">Submit</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <p className="text-center">Please login before uploading a laptop</p>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// }

// export default BuildLaptop;
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { MyContext } from "../UseContext";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function BuildLaptop() {
  const navigate = useNavigate();
  const { LoginState } = useContext(MyContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const imageLaptop = useRef();

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
    selectedImages.forEach((file) => finalData.append("laptopImages", file));

    axios
      .post("https://backendwith-frontend.vercel.app/api/BuildLaptop", finalData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Laptop details uploaded successfully!");
        navigate("/laptop-list");
      })
      .catch((error) => {
        console.error(error);
        alert("Error submitting the form. Please try again.");
      });
  }

  const firstStepFields = [
    "series", "Colour", "price","FormFactor", "ItemHeight", "ScreenSize","standingscreendisplaysize"
    ,"screenresolution", "ProductDimensions", "Batteries", "itemmodelnumber",
    "ProcessorBrand", "ProcessorType", "ProcessorSpeed", "ProcessorCount",
    "RAMSize", "MemoryTechnology", "maximummemorysupported", "HardDriveSize",
    "HardDiskDescription", "HardDriveInterface", "AudioDetails"
  ];

  const secondStepFields = [
    "GraphicsCoprocessor", "graphicschipsetbrand", "GraphicsRAMType",
    "GraphicsInterface", "ConnectivityType", "WirelessType",
    "numberofhdmiports", "Voltage", "OperatingSystem", "BatteriesIncluded",
    "lithiumBatteryEnergyContent", "numberoflithiumioncells", "ComponentsIncluded",
    "Manufacturer", "CountryofOrigin", "ItemWeight"
  ];

  return (
    <div className="container">
      {LoginState ? (
        <div className="form-container">
          <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
          <h2 className="text-center">Upload Laptop Details</h2>

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

          {/* Step 2 - Advanced Laptop Details & Image Upload */}
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
              <label>Upload Laptop Images (Max 4)
                <input
                  type="file"
                  ref={imageLaptop}
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
          <p className="text-center">Please login before uploading a laptop</p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default BuildLaptop;



