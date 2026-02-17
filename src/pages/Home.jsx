import {useState, useEffect} from "react";
import { getGriffinRailData } from "../services/api";

function Home() {
    const [griffinRail, setGriffinRail] = useState("./public/trainisthere.png");
    const [error, setError] = useState(null);
    const [loading,SetLoading] = useState(true);

    useEffect(() => {
        const loadGriffinRail = async () => {
            try {
                const openOrClosed = await getGriffinRailData();
                switch(openOrClosed) {
                    case "Yes":
                        setGriffinRail("./public/trainisthere.png")
                        return
                    case "No":
                        setGriffinRail("./public/trainnotthere.png")
                        return
                    }
            } catch(err) {
                console.log(err)
                setError("Failed to load rail data...")
            } finally {
                SetLoading(false)
            }
        }

        loadGriffinRail();
    })
    return (
        <div>
            <img src={`${griffinRail}`} />
            <button ></button>
        </div>
    );
}

export default Home;