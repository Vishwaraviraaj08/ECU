import React, {useEffect} from "react";

export default function egtCalibration() {

    useEffect(() => {
        handleChange()
    }, []);


    function renderChart([voltageMin, voltageMax, temperatureMin, temperatureMax]) {
        new Chart("gasChart", {
            type: 'line',
            data: {
                labels: [voltageMin, voltageMax],
                datasets: [{
                    label: 'GAS Calibration',
                    data: [
                        {x: voltageMin, y: temperatureMin},
                        {x: voltageMax, y: temperatureMax}
                    ],
                    backgroundColor: 'rgba(122,38,164,0.2)',
                    borderColor: 'rgb(95,0,255)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        type: 'linear',
                        position: 'left'
                    }
                }
            }
        });

    };


    function handleChange() {
        let voltageMin = document.getElementById("voltageMin4").value;
        let voltageMax = document.getElementById("voltageMax4").value;
        let temperatureMin = document.getElementById("temperatureMin4").value;
        let temperatureMax = document.getElementById("temperatureMax4").value;
        let gain = (temperatureMax - temperatureMin) / (voltageMax - voltageMin);
        let intercept = temperatureMin - gain * voltageMin;
        document.getElementById("gain4").innerHTML = gain+"";
        document.getElementById("offset4").innerHTML = intercept+"";
        renderChart([voltageMin, voltageMax, temperatureMin, temperatureMax]);
    }

    return (<>
        <style>
            {`
            h2{
            background-color: rgba(255, 255, 255, 0.05) !important;
            border-radius: 16px !important;
            
            backdrop-filter: blur(5px) !important;
            -webkit-backdrop-filter: blur(5px) !important;
            }
            `}

        </style>

        <div className="row mt-5">
            <h2 className={"text-white"}>Speed Calibration</h2>
            <div className="col-6">
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col">Parameter</th>
                        <th scope="col">Voltage</th>
                        <th scope="col">Temperature</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Min</td>
                        <td><input type="number" id={"voltageMin4"} defaultValue="0"  onChange={handleChange}/></td>
                        <td><input type="number" id={"temperatureMin4"} defaultValue="0" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"voltageMax4"} defaultValue="5" onChange={handleChange}/></td>
                        <td><input type="number" id={"temperatureMax4"} defaultValue="100" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gain</td>
                        <td></td>
                        <td><div id={"gain4"}>hello</div></td>
                    </tr>
                    <tr>
                        <td>Offset</td>
                        <td></td>
                        <td><div id={"offset4"}>hello</div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-5 mx-auto">
                <canvas id="gasChart" ></canvas>
            </div>
        </div>
    </>)
}