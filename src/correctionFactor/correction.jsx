import React, { useEffect } from 'react'

function Trim({values}){
    useEffect(() => {
        handleChange();
    }, [values]);

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
                        <td ><input type="number" readOnly value={values.Nozzlesize} /></td>
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

function GasPressure({values}){
    useEffect(() => {
        handleChange();
    }, [values]);
    function handleChange(){
        let gasPressure = parseInt(document.getElementById("Gaspressure").value);
        let GasPressureMin = parseInt(document.getElementById("GasPressureMin").value);
        let GasPressureMax = parseInt(document.getElementById("GasPressureMax").value);
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
                        <td ><input type="number" readOnly value={values.Gaspressure} /></td>
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

function GasTemperature({values}){
    useEffect(() => {
        handleChange();
    }, [values]);
    function handleChange(){
        let GasTemperatureMin = parseInt(document.getElementById("GasTemperatureMin").value);
        let GasTemperatureMax = parseInt(document.getElementById("GasTemperatureMax").value);
        let gasTemperature = parseInt(document.getElementById("Gastemperature").value);
        if(gasTemperature >= parseInt(GasTemperatureMin && gasTemperature <= GasTemperatureMax)){
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
                        <td ><input type="number" readOnly value={values.Gastemperature} /></td>
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


function StartingDose({values}){
    useEffect(() => {
        handleChange();
    }, [values]);

    function handleChange(){
        let Enginespeed = parseInt(document.getElementById("Enginespeed").value);
        let StartingDoseSpeed = parseInt(document.getElementById("StartingDoseSpeed").value);
        // console.log('Enginespeed', Enginespeed, 'StartingDoseSpeed', StartingDoseSpeed,Enginespeed <= StartingDoseSpeed);
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
                        <td ><input type="number" readOnly value={values.Enginespeed} /></td>
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

export default function Correction({values}) {
    
    // function copyDataFunc(fromId, toId, div = false){
    //     return () => {
    //         let from = document.getElementById(fromId).value;
    //         if(div){
    //             document.getElementById(toId).innerHTML = from;
    //         }
    //         else{
    //             document.getElementById(toId).value = from;
    //         }
    //     }
    // }

    // useEffect(() => {
    //     copyDataFunc("Nozzlesize", "NozzlesizeCorrection", )();
    //     copyDataFunc("Gaspressure", "GasPressureCorrection" )();
    //     copyDataFunc("Gastemperature", "GasTemperatureCorrection" )();
    //     copyDataFunc("Enginespeed", "EngineSpeedCorrection" )();
    // }, [values]);
  
    return (
    
    <>
     <div className="container-fluid">
        <div className='row'>
            <Trim values={values}/> 
            <GasPressure values={values}/>
            <GasTemperature values={values}/>
            <StartingDose values={values}/>
        </div>
     </div>
    </>
  )
}
