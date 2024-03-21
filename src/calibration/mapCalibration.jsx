import React, {useEffect} from "react";

export default function mapCalibration() {

    useEffect(() => {
        handleChange()
    }, []);




    function renderChart([voltageMin, voltageMax, pressureMin,pressureMax]) {
        new Chart("mapChart", {
            type: 'line',
            data: {
                labels: [voltageMin, voltageMax],
                datasets: [{
                    label: 'Map Calibration',
                    data: [
                        {x: voltageMin, y: pressureMin},
                        {x: voltageMax, y: pressureMax}
                    ],
                    backgroundColor: 'rgba(130,183,35,0.2)',
                    borderColor: 'rgb(192,255,0)',
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
        let voltageMin = document.getElementById("voltageMin2").value;
        let voltageMax = document.getElementById("voltageMax2").value;
        let pressureMin = document.getElementById("pressureMin2").value;
        let pressureMax = document.getElementById("pressureMax2").value;
        let gain = (pressureMax - pressureMin) / (voltageMax - voltageMin);
        let intercept = pressureMin - gain * voltageMin;
        document.getElementById("gain2").innerHTML = gain+"";
        document.getElementById("offset2").innerHTML = intercept+"";
        renderChart([voltageMin, voltageMax, pressureMin, pressureMax]);
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
                        <th scope="col">Pressure</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Min</td>
                        <td><input type="number" id={"voltageMin2"} defaultValue="0"  onChange={handleChange}/></td>
                        <td><input type="number" id={"pressureMin2"} defaultValue="3" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"voltageMax2"} defaultValue="5" onChange={handleChange}/></td>
                        <td><input type="number" id={"pressureMax2"} defaultValue="1" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gain</td>
                        <td></td>
                        <td><div id={"gain2"}>hello</div></td>
                    </tr>
                    <tr>
                        <td>Offset</td>
                        <td></td>
                        <td><div id={"offset2"}>hello</div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-5 mx-auto">
                <canvas id="mapChart" ></canvas>
            </div>
        </div>
    </>)
}