import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";
import { useContext } from "react";
function UploadElectronics() {
  const navigate = useNavigate();
   const {setSelectElectronicOption ,SelectElectronicOption} = useContext(MyContext);

  // Array of electronics options
  const electronicsOptions = [
    "UploadLaptop",
    "Earbuds",
    "Mobile",
    "Smartwatches",
    "MobileCharger",
    "LaptopCharger",
    "ChargingMobileBattery",
    "DigitalWatches",
  ];

  // Handle the dropdown selection change
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption)
     setSelectElectronicOption(selectedOption);
     console.log(SelectElectronicOption)
    navigate(`/${selectedOption}`); // Navigate to the selected route
  };

  return (
    <>
      <select
        name="UploadElectronics"
        id="anything"
        onChange={handleSelectChange} // Add onChange event handler
        defaultValue="" // Placeholder option by default
      >
        <option value="" disabled>
          Select an option
        </option>
        {electronicsOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default UploadElectronics;
