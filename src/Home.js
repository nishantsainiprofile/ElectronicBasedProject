import Laptop from "./Laptop";
import MobileChargerDisplay from "./MobileChargerDisplay";
import OfferSlider from "./OfferSlider";
import LinkTo from "./LinkTo";
import Footer from "./Footer";
function Home(){
    return(<>
    <header>
    <LinkTo/>
    </header>
    <OfferSlider/>
    <Laptop/>
    {/* <MobileChargerDisplay/> */}
    <Footer/>
    </>)
}

export default Home;