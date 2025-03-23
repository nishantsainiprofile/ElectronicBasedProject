import { useContext, useEffect } from "react";
import { MyContext } from "./UseContext"; // Import your context
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function MobileChargerDisplay() {
  const { FindObject, setFindObject, setSelectedLaptop, setImageIndex , setMobileChargerData, MobileChargerData,  } =
    useContext(MyContext);

  const navigate = useNavigate();
  const { id } = useParams(); // Access the dynamic :id from the URL

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/ChargingMobile")
      .then((response) => {
        console.log(response.data);
        setMobileChargerData(response.data.MobileCharger); // Update state with fetched data
      })
      .catch((error) => {
        if (error.response) {
          console.log(
            error.response.data?.Information ||
              "An error occurred with the response"
          );
        } else if (error.request) {
          console.log("No response received from server. Check your backend and network.");
        } else {
          console.log("Error:", error.message);
        }
      });
  }, [setMobileChargerData]);

  const handleImageClick = (charger, index) => {
    setSelectedLaptop(charger);
    setImageIndex(index);
    navigate(`/MobileChargerDisplay/${charger._id}`); // Navigate to details page with laptop ID
  };
  const SubmitPayment = () => {
    navigate("/Payment"); // Navigate to Stripe payment page
  };

  // If `id` is present in the URL, display the details of the selected laptop
  if (id) {
    const charger = MobileChargerData.find((item) => item._id === id); // Find the laptop by ID
    if (!charger) {
      return <p className="text-center">Laptop not found</p>;
    }

    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x align-center">
          <div className="cell medium-5">
            <div className="card">
              <div className="card-divider">
                <h3>{charger.series}</h3>
              </div>
              <img
                src={`http://localhost:5002/${charger.MobileBatteryImage}`}
                alt="Laptop"
                className="thumbnail"
              />
              <div className="card-section">
                {Object.entries(charger).map(([key, value], index) => (
                  <p key={index}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
                <button className="button success" onClick={SubmitPayment}>
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
        {MobileChargerData && MobileChargerData.length > 0 ? (
          MobileChargerData.map((object, index) => (
            <div className="cell" key={index}>
              <div className="card">
                <img
                  src={`http://localhost:5002/${object.MobileBatteryImage}`}
                  alt="Laptop"
                  className="thumbnail"
                  onClick={() => handleImageClick(object, index)}
                />
                <div className="card-section">
                  {/* <h4>{object.Laptop}</h4> */}
                  <p>
                    <strong>Price:</strong> {object.Price}
                  </p>
                  <p>{object. BrandName}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Charger available.</p>
        )}
      </div>
    </div>
  );
}

export default MobileChargerDisplay;
