import { useState, useRef } from "react";
import axios from "axios";
import { MyContext } from "./UseContext";
import { useContext } from "react";
import Login from "./Login";

function BuildLaptop() {
  const { LoginState } = useContext(MyContext);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const imageLaptop = useRef();
  const [preview, setPreview] = useState(null);

  // Change image preview
  function ImageChange() {
    const files = imageLaptop.current.files[0];
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

    // Append form data
    Object.keys(formData).forEach((key) => {
      finalData.append(key, formData[key]);
    });

    // Append image only if a file is selected
    if (imageLaptop.current && imageLaptop.current.files[0]) {
      finalData.append("LaptopImage", imageLaptop.current.files[0]);
    }

    axios
      .post("http://localhost:5002/api/BuildLaptop", finalData, {
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
    "Series",
    "Colour",
    "Form Factor",
    "Item Height",
    "Standing screen display size",
    "Screen Resolution",
    "Resolution",
    "Product Dimensions",
    "Batteries",
    "Item model number",
    "Processor Brand",
    "Processor Type",
    "Processor Speed",
    "Processor Count",
    "RAM Size",
    "Memory Technology",
    "Maximum Memory Supported",
    "Hard Drive Size",
    "Hard Disk Description",
    "Hard Drive Interface",
    "Audio Details",
  ];

  const secondSetFields = [
    "Graphics Coprocessor",
    "Graphics Chipset Brand",
    "Graphics RAM Type",
    "Graphics Card Interface",
    "Connectivity Type",
    "Wireless Type",
    "Number of HDMI Ports",
    "Voltage",
    "Operating System",
    "Are Batteries Included",
    "Lithium Battery Energy Content",
    "Number of Lithium Ion Cells",
    "Included Components",
    "Manufacturer",
    "Country of Origin",
    "Item Weight",
  ];

  return (
    <div>
      {LoginState ? (
        <div className="grid-container">
          <div className="grid-x grid-padding-x align-center">
            <div className="cell medium-8 large-6">
              <h2 className="text-center">Upload Laptop Information</h2>
              <div className="callout">
                {currentStep === 1 &&
                  firstSetFields.map((field) => (
                    <label key={field}>
                      {field}
                      <input
                        type="text"
                        name={field.toLowerCase().replace(/\s+/g, "")}
                        placeholder={`Enter ${field}`}
                        onChange={handleChange}
                        className="input-group-field"
                      />
                    </label>
                  ))}
                {currentStep === 2 &&
                  secondSetFields.map((field) => (
                    <label key={field}>
                      {field}
                      <input
                        type="text"
                        name={field.toLowerCase().replace(/\s+/g, "")}
                        placeholder={`Enter ${field}`}
                        onChange={handleChange}
                        className="input-group-field"
                      />
                    </label>
                  ))}
                {currentStep === 2 && (
                  <label>
                    Image Laptop
                    <input
                      type="file"
                      ref={imageLaptop}
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
          <p className="text-center">Please login before uploading a laptop</p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default BuildLaptop;

