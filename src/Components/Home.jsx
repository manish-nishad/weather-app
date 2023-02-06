import React from "react";
import ChooseState from "./ChooseState";

const Home = () => {
    return(
        <>
            <div className="homeWrap">
                <div className="weatherSection">
                    <div className="rightSide">
                        <ChooseState />
                        1. Choose State <br />
                        2. Weekinfo <br />
                        3. Humidity
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Home;