import {BrowserRouter ,Routes, Route} from "react-router-dom";
import {MyContext} from "./UseContext";
import {useState} from "react";
import LinkTo  from "./LinkTo";
import Home from "./Home"
import Register from "./Register";
import Login from "./Login";
import Laptop from "./Laptop"
import "./App.css"
import Stripe from "./App";
import Userlogout from "./Userlogout";
import Paytm from "./Paytm";
import Payment from "./Payment";
import UploadElectronics from "./UploadElectronics";
import UploadLaptop from "./ElectronicsComponent/UploadLaptop";
import ChargingMobileBattery from "./ElectronicsComponent/ChargingMobileBattery";
import DigitalWatches from "./ElectronicsComponent/DigitalWatches";
import Mobile from "./ElectronicsComponent/Mobile";
import Smartwatches from "./ElectronicsComponent/Smartwatches";
import LaptopCharger from "./ElectronicsComponent/LaptopCharger";
import MobileCharger from "./ElectronicsComponent/MobileCharger";
import App from "./App"
import SearchElectronics from "./SearchElectronics";
import SearchedElectronics from "./SearchedElectronics";
import SelectedElectronicsId from "./SelectedElectronicsId";
// import DebitCardPayment from "./DebitCard";
import UpiPayment from "./UPIPayment"; 
// import QrScan from "./QRScan"; 
// import COD from "./COD"; 
// import MobileChargerDisplay from "./MobileChargerDisplay";
function RouterPath(){
    const [FindObject , setFindObject] = useState([]);
    const [selectedElectronics , setSelectedElectronics] = useState();
    const [SelectLaptopState , setSelectLaptopState] =useState(false);
    const [ImageIndex, setImageIndex]= useState(null);
    const [loginMessage, setLoginMessage] = useState("");
    const [LoginState , setLoginState]= useState(false);
    const [SelectElectronicOption,setSelectElectronicOption] = useState(null);
    const [MobileChargerData , setMobileChargerData] = useState([]);
    const[FilteredProducts ,setFilteredProducts] = useState();
    const[SelectedElectronicProduct ,setSelectedElectronicProduct] = useState();
  
    console.log(FindObject)
    return(<> 
      <div >
        <MyContext.Provider   value={{
  FindObject,
  setFindObject,
  selectedElectronics,
  setSelectedElectronics,
  SelectLaptopState,
  setSelectLaptopState,
  ImageIndex,
  setImageIndex,
  loginMessage,
  setLoginMessage,
  LoginState,
  setLoginState, // This is what you need
  setSelectElectronicOption,
  SelectElectronicOption, 
  setMobileChargerData,
  MobileChargerData,
  FilteredProducts,
  setFilteredProducts,
  SelectedElectronicProduct,
  setSelectedElectronicProduct ,
}} >
    <BrowserRouter>
    
               <LinkTo/>
        <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route  path="/Register" element={<Register/>}  />
            <Route  path="/Login" element={<Login/>} />
            <Route  path="/UploadElectronics" element={<UploadElectronics/>}  />
            <Route  path="/App"  element={<App/>}  />
            <Route path="/:brand/:id" element={<Laptop />} />
            <Route  path="Userlogout" element={<Userlogout/>}/>
            <Route  path="/paytm" element={<Paytm/>}/>
            <Route  path="/Payment" element={<Payment/>}/>
            <Route  path="/UploadLaptop" element={<UploadLaptop/>}/>
            <Route  path="/ChargingMobileBattery" element={<ChargingMobileBattery/>}/>
            {/* <Route  path="/MobileCharger" element={<ChargingMobileBattery/>}/> */}
            <Route  path="/DigitalWatches" element={<DigitalWatches/>}/>
            <Route  path="/smartwatches" element={<Smartwatches/>}/>
            <Route  path="/Mobile" element={<Mobile/>}/>
            <Route  path="/LaptopCharger" element={<LaptopCharger/>}/>
            <Route  path="/MobileCharger" element={<MobileCharger/>}/>
            <Route path="/SearchElectronics" element={<SearchElectronics/>}/>
            <Route path="/SearchedElectronics" element={<SearchedElectronics/>}/>
            <Route path="/SelectedElectronicsId/:series" element={<SelectedElectronicsId />} />
            {/* <Route path="/App" element={<CreditCardPayment />} /> */}
            {/* <Route path="/debit-card" element={<DebitCardPayment />} /> */}
            <Route path="/upi-payment" element={<UpiPayment />} />
            {/* <Route path="/qr-scan" element={<QrScan />} /> */}
            {/* <Route path="/cod" element={<COD />} /> */}
          </Routes>
    </BrowserRouter>
    </MyContext.Provider>
         </div>    
    </>)
}

export default RouterPath;