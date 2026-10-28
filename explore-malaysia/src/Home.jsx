import beach from "./images/beach.jfif";
import kl from "./images/kl.jfif";

function Home() {
    return(
        <div className="container">
            <h2>Discover the beauty of Malaysia</h2>
            <p>Welcome to explore Malaysia! Discover beautiful islands, exciting cities and amazing tourist destinations</p>

            {/* add images*/}
            <div className="destination-container">
                <div className="destination">
                    <img src={beach} alt="beaches"/>
                    <h3>Beautiful Beaches</h3>
                </div>
                <div className="destination">
                    <img src={kl} alt="kualalumpur"/>
                    <h3>Petronas Twin Towers</h3>
                </div>
            </div>
        </div>

    );
}
export default Home;
