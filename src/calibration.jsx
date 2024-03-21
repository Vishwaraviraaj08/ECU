import React, {useEffect} from 'react'
import parse from "html-react-parser";
import {render} from "react-dom";
import {Link} from "react-router-dom";
import SpeedCalibration from "./calibration/speedCalibration.jsx";
import MapCalibration from "./calibration/mapCalibration.jsx"
import EGTCalibration from "./calibration/egtCalibration.jsx";
import GasCalibration from "./calibration/gasCalibration.jsx";
import Navigation from "./navigation/navigation.jsx";

export default function Calibration() {
    return (
        <>
            <div className="container-fluid">
                    {/* <div className="row my-5 d-flex flex-row justify-content-end align-items-center w-50 ms-auto">
                        <Navigation/>
                    </div> */}
                    <div className="row">
                        <SpeedCalibration/>
                        <MapCalibration/>
                        <EGTCalibration/>
                        <GasCalibration/>
                    </div>
            </div>

        </>
    )
}
