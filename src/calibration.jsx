import React, {useEffect} from 'react'
import parse from "html-react-parser";
import {render} from "react-dom";
import SpeedCalibration from "./calibration/speedCalibration.jsx";
import MapCalibration from "./calibration/mapCalibration.jsx"
import EGTCalibration from "./calibration/egtCalibration.jsx";
import GasCalibration from "./calibration/gasCalibration.jsx";

export default function calibration() {
    return (
        <div>
            <div className="container-fluid">
                <SpeedCalibration/>
                <MapCalibration/>
                <EGTCalibration/>
                <GasCalibration/>
            </div>

        </div>
    )
}
