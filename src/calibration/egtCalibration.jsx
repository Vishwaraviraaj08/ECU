import React, {useEffect} from "react";

export default function egtCalibration() {
    useEffect(() => {
        handleChange()
    }, []);

    function renderChart([voltageMin, voltageMax, temperatureMin, temperatureMax]) {
        new Chart("egtChart", {
            type: 'line',
            data: {
                labels: [voltageMin, voltageMax],
                datasets: [{
                    label: 'EGT Calibration',
                    data: [
                        {x: voltageMin, y: temperatureMin},
                        {x: voltageMax, y: temperatureMax}
                    ],
                    backgroundColor: 'rgba(66,211,201,0.2)',
                    borderColor: 'rgb(0,177,255)',
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
        let voltageMin = document.getElementById("voltageMin3").value;
        let voltageMax = document.getElementById("voltageMax3").value;
        let temperatureMin = document.getElementById("temperatureMin3").value;
        let temperatureMax = document.getElementById("temperatureMax3").value;
        let gain = (temperatureMax - temperatureMin) / (voltageMax - voltageMin);
        let intercept = temperatureMin - gain * voltageMin;
        document.getElementById("gain3").innerHTML = gain+"";
        document.getElementById("offset3").innerHTML = intercept+"";
        // renderChart([voltageMin, voltageMax, temperatureMin, temperatureMax]);
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
                <h2 className={"text-white"}>EGT</h2>
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
                        <td><input type="number" id={"voltageMin3"} defaultValue="0"  onChange={handleChange}/></td>
                        <td><input type="number" id={"temperatureMin3"} defaultValue="0" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"voltageMax3"} defaultValue="5" onChange={handleChange}/></td>
                        <td><input type="number" id={"temperatureMax3"} defaultValue="1000" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gain</td>
                        <td></td>
                        <td><div id={"gain3"}></div></td>
                    </tr>
                    <tr>
                        <td>Offset</td>
                        <td></td>
                        <td><div id={"offset3"}></div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
    </>)
}