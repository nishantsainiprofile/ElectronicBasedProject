import { useState, useRef } from "react";
import axios from "axios";
import { MyContext } from "../UseContext";
import { useContext } from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function Mobile() {
  const { LoginState } = useContext(MyContext);
  const navigate=useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const imageMobile = useRef();
  const [preview, setPreview] = useState(null);

  // Change image preview
  function ImageChange() {
    const files = imageMobile.current.files[0];
    if (files) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(files);
    }
  }

  // Handle input change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Save and Continue
  function saveAndContinue() {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  }

  // Submit the form
  function Submit() {
    const finalData = new FormData();

    // Append form data correctly
    Object.keys(formData).forEach((key) => {
      finalData.append(key, formData[key]);
    });

    // Append image only if a file is selected
    if (imageMobile.current && imageMobile.current.files[0]) {
      finalData.append("MobileImages", imageMobile.current.files[0]);
    }
    console.log([...finalData]); // Debugging: Log all form data before submitting

    axios
      .post("http://localhost:5002/api/UploadMobile", finalData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit the form. Please try again.");
      });
  }

  const firstSetFields = [
    { label: "Series", name: "Series" },
    { label: "Price", name: "Price" },
    { label: "Brand Name", name: "BrandName" },
    { label: "Colour", name: "Colour" },
    { label: "Display", name: "Display" },
    { label: "Chip", name: "Chip" },
    { label: "Finish", name: "Finish" },
    { label: "Camera", name: "Camera" },
    { label: "Front Facing Camera", name: "FrontFacingCamera" },
    { label: "Secure Authentication", name: "SecureAuthentication" },
    { label: "Battery", name: "Battery" },
    { label: "Item Model Number", name: "ItemModelNumber" },
    { label: "Material", name: "Material" },
    { label: "Charging Speed", name: "ChargingSpeed" },
    { label: "Voltage", name: "Voltage" },
    { label: "Manufacturer", name: "Manufacturer" },
    { label: "Capacity", name: "Capacity" },
    { label: "Operating System", name: "OperatingSystem" },
  ];
  
  const secondSetFields = [
    { label: "Special Features", name: "SpecialFeatures" },
    { label: "Screen Size", name: "ScreenSize" },
    { label: "RAM Memory Installed Size", name: "RAMMemoryInstalledSize" },
    { label: "Included Components", name: "IncludedComponents" },
    { label: "Country of Origin", name: "CountryOfOrigin" },
    { label: "Item Weight", name: "ItemWeight" },
  ];
  

  return (
    <div>
      {LoginState ? (
        <div className="grid-container">
          <div className="grid-x grid-padding-x align-center">
            <div className="cell medium-8 large-6">
            <button
                onClick={() => navigate(-1)}
                style={{
                  marginBottom: "15px",
                  backgroundColor: "#ccc",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                ⬅ Back
              </button>
              <h2 className="text-center">Upload Mobile  Information</h2>
              <div className="callout">
                {currentStep === 1 &&
                  firstSetFields.map((field) => (
                    <label key={field.name}>
                      {field.label}
                      <input
                        type="text"
                        name={field.name} // Corrected naming
                        placeholder={`Enter ${field.label}`}
                        onChange={handleChange}
                        className="input-group-field"
                      />
                    </label>
                  ))}
                {currentStep === 2 &&
                  secondSetFields.map((field) => (
                    <label key={field.name}>
                      {field.label}
                      <input
                        type="text"
                        name={field.name} // Corrected naming
                        placeholder={`Enter ${field.label}`}
                        onChange={handleChange}
                        className="input-group-field"
                      />
                    </label>
                  ))}
                {currentStep === 2 && (
                  <label>
                    Upload Image
                    <input
                      type="file"
                      ref={imageMobile}
                      onChange={ImageChange}
                      className="input-group-field"
                    />
                  </label>
                )}
                {preview && currentStep === 2 && (
                  <div className="text-center">
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100px", marginTop: "10px" }}
                    />
                  </div>
                )}
                {currentStep === 1 && (
                  <button onClick={saveAndContinue} className="button expanded">
                    Save and Continue
                  </button>
                )}
                {currentStep === 2 && (
                  <button onClick={Submit} className="button expanded">
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center">Please login before uploading a Mobile </p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default Mobile;
