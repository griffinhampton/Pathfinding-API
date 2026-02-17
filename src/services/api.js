//Get all open or closed crossing data
//Attention: CrossingClosed = 1(Yes), CrossingClosed = 2(No)
//https://safetydata.fra.dot.gov/MasterWebService/PublicApi/GCIS/v1/odata/Crossings?$filter=CrossingClosed eq '1'&token=<token-value>

import { convertXML } from "simple-xml-to-json";

const RAIL_API_KEY = import.meta.env.VITE_RAIL_API_KEY
const RAIL_URL = import.meta.env.VITE_RAIL_URL
const GRIFFIN_RAIL_ID = import.meta.env.VITE_GRIFFIN_RAIL_ID

export const getGriffinRailData = async () => {
    const response = await fetch (`${RAIL_URL}?$filter=CrossingId eq '${GRIFFIN_RAIL_ID}'&token=${RAIL_API_KEY}`);
    const data = await (convertXML(response));
    console.log(JSON.stringify(data))
    const closedOrOpen = data[Object.keys(data)[-1]];
    return closedOrOpen;
}


//TODO: allow user to input where they wanna go and find route to avoid closed railroad stops
//export const getOtherRailData = async ()