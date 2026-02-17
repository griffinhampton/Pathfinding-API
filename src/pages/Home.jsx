import {useState, useEffect} from "react";
import { getGriffinRailData } from "../services/api";

const fetchRailData = async () => {
    const res = await fetch('/users');
    const data = await res.json()
    return data;
}

function Home() {
    const [griffinRail, setGriffinRail] = useState("./public/trainisthere.png");
    const [error, setError] = useState(null);
    const [loading,SetLoading] = useState(true);
    useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchRailData();
      // do something with data
      console.log(data);
    } catch (err) {
      // handle error
    }
  };
  fetchData();
}, []);

        /*
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
        */

        





    return (
        <div>
            <div>
                <img src={`${griffinRail}`} className="train-image" />
            </div>
            <button >click to refresh</button>
        </div>
    );
}

export default Home;