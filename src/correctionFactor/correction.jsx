import React, { useEffect } from 'react'

function Trim(){
    useEffect(() => {
        handleChange();
    }, []);

    function handleChange(){
        let nozzleSize = document.getElementById("Nozzlesize").value;
        let nozzleSizeTrimGain = document.getElementById("nozzleSizeTrimGain").value;
        let nozzleSizeTrimOffset = document.getElementById("nozzleSizeTrimOffset").value;
        document.getElementById("cfno").value = (nozzleSize * nozzleSizeTrimGain) + parseFloat(nozzleSizeTrimOffset);
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
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col" colSpan={2}>Nozzle Size Trim</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Gain</td>
                        <td><input type="number" id={"nozzleSizeTrimGain"} defaultValue="0"  onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Offset</td>
                        <td><input type="number" id={"nozzleSizeTrimOffset"} defaultValue="5" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Nozzle Size</td>
                        <td ><input type="number" readOnly id={"NozzlesizeCorrection"} defaultValue="" /></td>
                    </tr>
                    <tr>
                        <td>CFNO</td>
                        <td><input type="number" readOnly id={"cfno"} defaultValue="" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </>)
}

function GasPressure(){
    useEffect(() => {
        handleChange();
    }, []);
    function handleChange(){
        let gasPressure = document.getElementById("Gaspressure").value;
        let GasPressureMin = document.getElementById("GasPressureMin").value;
        let GasPressureMax = document.getElementById("GasPressureMax").value;
        if(gasPressure >= GasPressureMin && gasPressure <= GasPressureMax){
            document.getElementById("cfgp").value = 1;
        }
        else{
            document.getElementById("cfgp").value = 0;
        }

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
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col" colSpan={2}>Gas Pressure Trim</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Min</td>
                        <td><input type="number" id={"GasPressureMin"} defaultValue="0"  onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"GasPressureMax"} defaultValue="5" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gas pressure</td>
                        <td ><input type="number" readOnly id={"GasPressureCorrection"} defaultValue="" /></td>
                    </tr>
                    <tr>
                        <td>CFGP</td>
                        <td><input type="number" readOnly id={"cfgp"} defaultValue="" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </>)
}

function GasTemperature(){
    useEffect(() => {
        handleChange();
    }, []);
    function handleChange(){
        let GasTemperatureMin = document.getElementById("GasTemperatureMin").value;
        let GasTemperatureMax = document.getElementById("GasTemperatureMax").value;
        let gasTemperature = document.getElementById("Gastemperature").value;
        if(gasTemperature >= GasTemperatureMin && gasTemperature <= GasTemperatureMax){
        document.getElementById("cfgt").value = 1;
        }
        else{
        document.getElementById("cfgt").value = 0;
        }
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
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col" colSpan={2}>Gas Temperature Trim</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Min</td>
                        <td><input type="number" id={"GasTemperatureMin"} defaultValue="0"  onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Max</td>
                        <td><input type="number" id={"GasTemperatureMax"} defaultValue="5" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Gas Temperature</td>
                        <td ><input type="number" readOnly id={"GasTemperatureCorrection"} defaultValue="" /></td>
                    </tr>
                    <tr>
                        <td>CFGT</td>
                        <td><input type="number" readOnly id={"cfgt"} defaultValue="" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </>)
}


function StartingDose(){
    useEffect(() => {
        handleChange();
    }, []);

    function handleChange(){
        let Enginespeed = document.getElementById("Enginespeed").value;
        let StartingDoseSpeed = document.getElementById("StartingDoseSpeed").value;
        if(Enginespeed <= StartingDoseSpeed){
            document.getElementById("cfss").value = document.getElementById("Startingdose").value;
        }
        else{
            document.getElementById("cfss").value = 0;
        }
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
                <table className="table table-dark table-hover mb-5" >
                    <thead>
                    <tr>
                        <th scope="col" colSpan={2}>Starting Dose</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Starting Speed</td>
                        <td><input type="number" id={"StartingDoseSpeed"} defaultValue="0"  onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Engine Speed</td>
                        <td ><input type="number" readOnly id={"EngineSpeedCorrection"} defaultValue="" /></td>
                    </tr>
                    <tr>
                        <td>CFSS</td>
                        <td><input type="number" readOnly id={"cfss"} defaultValue="" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </>)
}

export default function Correction() {
    
    function copyDataFunc(fromId, toId, div = false){
        return () => {
            let from = document.getElementById(fromId).value;
            if(div){
                document.getElementById(toId).innerHTML = from;
            }
            else{
                document.getElementById(toId).value = from;
            }
        }
    }

    useEffect(() => {
        setInterval(copyDataFunc("Nozzlesize", "NozzlesizeCorrection", ), 1000);
        setInterval(copyDataFunc("Gaspressure", "GasPressureCorrection" ), 1000);
        setInterval(copyDataFunc("Gastemperature", "GasTemperatureCorrection" ), 1000);
        setInterval(copyDataFunc("Enginespeed", "EngineSpeedCorrection" ), 1000);
    }, []);
  
    return (
    
    <>
     <div className="container-fluid">
        <div className='row'>
            <Trim/> 
            <GasPressure/>
            <GasTemperature/>
            <StartingDose/>
        </div>
     </div>
    </>
  )
}
