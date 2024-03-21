import React, {useEffect} from "react";

export default function speedCalibration() {

    useEffect(() => {
        handleChange()
    }, []);


    function renderChart([voltageMin, voltageMax, speedMin, speedMax]) {
        new Chart("speedChart", {
            type: 'line',
            data: {
                labels: [voltageMin, voltageMax],
                datasets: [{
                    label: 'Speed Calibration',
                    data: [
                        {x: voltageMin, y: speedMin},
                        {x: voltageMax, y: speedMax}
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
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
        let voltageMin = document.getElementById("voltageMin1").value;
        let voltageMax = document.getElementById("voltageMax1").value;
        let speedMin = document.getElementById("speedMin1").value;
        let speedMax = document.getElementById("speedMax1").value;
        let gain = (speedMax - speedMin) / (voltageMax - voltageMin);
        let intercept = speedMin - gain * voltageMin;
        document.getElementById("gain1").innerHTML = gain+"";
        document.getElementById("offset1").innerHTML = intercept+"";
        // renderChart([voltageMin, voltageMax, speedMin, speedMax]);
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

            <div className="col-6">
            <h2 className={"text-white"}>Speed</h2>
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col">Parameter</th>
                        <th scope="col">Voltage</th>
                        <th scope="col">Speed</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Min</td>
                        <td><input type="number" id={"voltageMin1"} defaultValue="0"  onChange={handleChange}/></td>
                        <td><input type="number" id={"speedMin1"} defaultValue="0" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"voltageMax1"} defaultValue="5" onChange={handleChange}/></td>
                        <td><input type="number" id={"speedMax1"} defaultValue="5000" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gain</td>
                        <td></td>
                        <td><div id={"gain1"}></div></td>
                    </tr>
                    <tr>
                        <td>Offset</td>
                        <td></td>
                        <td><div id={"offset1"}></div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
    </>)
}