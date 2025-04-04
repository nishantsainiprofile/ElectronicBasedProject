import { useState, useRef, useContext } from "react";
import axios from "axios";
import { MyContext } from "../UseContext";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function MobileChargingBattery() {
  const navigate = useNavigate();
  const { LoginState } = useContext(MyContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const imagemobileCharger = useRef();

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
    selectedImages.forEach((file) => finalData.append("mobileChargingBatteryImages", file));

    axios
      .post("http://localhost:5007/api/mobileChargingBattery", finalData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("mobileCharger details uploaded successfully!");
        navigate("/mobileChargingBattery-list");
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
   "manufacturer", "countryoforigin", "itemweight", "mobileChargingBatteryImages",
  ];

  return (
    <div className="container">
      {LoginState ? (
        <div className="form-container">
          <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
          <h2 className="text-center">Upload mobileChargingBattery Details</h2>

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
              <label>Upload mobileImages Images (Max 4)
                <input
                  type="file"
                  ref={imagemobileCharger}
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
          <p className="text-center">Please login before uploading a MobileChargingBattery</p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default MobileChargingBattery;

