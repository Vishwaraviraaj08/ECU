import React from 'react';
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Calibration from './calibration';
import Correction from './correctionFactor/correction';


const TableComponents = function ({ title, params }) {
    // console.log( typeof  params[0].input);
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
        <h2 className={"text-light px-2 "}>{title}</h2>

        <table className="table table-dark table-hover mb-5" >
            <thead>
                <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">Parameters</th>
                    <th scope="col">Input</th>
                </tr>
            </thead>
            <tbody>
                {params.map((param, index) => {
                    return (
                        <tr>
                            <td scope="row">{index + 1}</td>
                            <td style={{ width: '300px' }}>{param.name}</td>
                            <td>
                                {/*<input type="text" name={"params.name"} />*/}
                                <div className="input-group">
                                    {
                                        parse(param.input)
                                    }
                                    <span className="input-group-text  bg-secondary text-light" id="basic-addon2" style={{ height: '38px' }}>{param.unit}</span>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>)
}


export default function components() {
    const [values, setValues] = useState({
        Noofstrokes: '4',
        Fuelcorrectionfactor: '1',
        Nozzlesize: '1.4',
        Noofcylinders: '1',
        Startingdose: '5.0',
        Enginespeed: '500',
        Gaspressure: '1.2',
        Gastemperature: '50',
        MAP: '0.1',
        Exhausttemperature: '200'
    });

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('formValues'));
        const defaultValue = {
            Noofstrokes: '4',
            Fuelcorrectionfactor: '1',
            Nozzlesize: '1.4',
            Noofcylinders: '1',
            Startingdose: '5.0',
            Enginespeed: '500',
            Gaspressure: '1.2',
            Gastemperature: '50',
            MAP: '0.1',
            Exhausttemperature: '200'
        };
        if (storedValues) {
            
            console.log(defaultValue.Enginespeed)
            const { Noofstrokes, Fuelcorrectionfactor, Nozzlesize, Noofcylinders, Startingdose, Enginespeed, Gaspressure, Gastemperature, MAP, Exhausttemperature} = storedValues;

            let fcf = (Fuelcorrectionfactor != undefined) ? Fuelcorrectionfactor: defaultValue.Fuelcorrectionfactor;
            document.getElementById("Fuelcorrectionfactor").value = fcf;
            let ns = (Nozzlesize != undefined) ? Nozzlesize: defaultValue.Nozzlesize;
            document.getElementById("Nozzlesize").value = ns;
            let sd = (Startingdose != undefined) ? Startingdose: defaultValue.Startingdose;
            document.getElementById("Startingdose").value = sd;
            let es = (Enginespeed != undefined) ? Enginespeed: defaultValue.Enginespeed;
            document.getElementById("Enginespeed").value = es;
            let gp = (Gaspressure != undefined) ? Gaspressure: defaultValue.Gaspressure;
            document.getElementById("Gaspressure").value = gp;
            let gt = (Gastemperature != undefined) ? Gastemperature: defaultValue.Gastemperature;
            document.getElementById("Gastemperature").value = gt;
            let m = (MAP != undefined) ? MAP: defaultValue.MAP;
            document.getElementById("MAP").value = m;
            let et = (Exhausttemperature != undefined) ? Exhausttemperature: defaultValue.Exhausttemperature;
            document.getElementById("Exhausttemperature").value = et;

            // Select the option for Noofstrokes
            let nos = (Noofstrokes != undefined) ? Noofstrokes: defaultValue.Noofstrokes;
            const NoofstrokesSelect = document.getElementById("Noofstrokes");
            for (let option of NoofstrokesSelect.options) {
                if (option.text === nos) {
                    option.selected = true;
                    break;
                }
            }

            // Select the option for Noofcylinders
            let noc = (Noofcylinders != undefined) ? Noofcylinders: defaultValue.Noofcylinders;
            const NoofcylindersSelect = document.getElementById("Noofcylinders");
            for (let option of NoofcylindersSelect.options) {
                if (option.text === noc) {
                    option.selected = true;
                    break;
                }
            }
            let data = {
                Noofstrokes: nos,
                Fuelcorrectionfactor: fcf,
                Nozzlesize: ns,
                Noofcylinders: noc,
                Startingdose: sd,
                Enginespeed: es,
                Gaspressure: gp,
                Gastemperature: gt,
                MAP: m,
                Exhausttemperature: et
            }
            setValues(data);
        }else{
            
            setValues(defaultValue);
        }

        const interval = setInterval(() => {
            const Noofstrokes_e = document.getElementById("Noofstrokes");
            const Noofstrokes = Noofstrokes_e.options[Noofstrokes_e.selectedIndex].text;

            const Fuelcorrectionfactor = document.getElementById("Fuelcorrectionfactor").value;
            const Nozzlesize = document.getElementById("Nozzlesize").value;
            const Startingdose = document.getElementById("Startingdose").value;
            const Enginespeed = document.getElementById("Enginespeed").value;
            const Gaspressure = document.getElementById("Gaspressure").value;
            const Gastemperature = document.getElementById("Gastemperature").value;
            const MAP = document.getElementById("MAP").value;
            const Exhausttemperature = document.getElementById("Exhausttemperature").value;

            const Noofcylinders_e = document.getElementById("Noofcylinders");
            const Noofcylinders = Noofcylinders_e.options[Noofcylinders_e.selectedIndex].text;



            setValues({
                Noofstrokes,
                Fuelcorrectionfactor,
                Nozzlesize,
                Noofcylinders,
                Startingdose,
                Enginespeed,
                Gaspressure,
                Gastemperature,
                MAP,
                Exhausttemperature
            });


            localStorage.setItem('formValues', JSON.stringify({
                Noofstrokes,
                Fuelcorrectionfactor,
                Nozzlesize,
                Noofcylinders,
                Startingdose,
                Enginespeed,
                Gaspressure,
                Gastemperature,
                MAP,
                Exhausttemperature
            }));
        }, 100);


        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
          });
    }, []);


    useEffect(() => {
        const xValues = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];


        let Bmultipliergainx = -1;
        let Bmultiplieroffset = 2;

        let PWMHgainx2 = -15;
        let PWMHgainx = 30;
        let PWMHoffset = 1;
        let Fuelcorrectionfactor = document.getElementById("Fuelcorrectionfactor").value;


        const args = {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    data: xValues.map((i) => {
                        return (((PWMHgainx2 * i * i) + (PWMHgainx * i) + PWMHoffset) * ((Bmultipliergainx * i) + Bmultiplieroffset) * Fuelcorrectionfactor);
                    }),
                    borderColor: "blue",
                    fill: false,
                    yAxisID: 'left'
                },  
                {
                    data: xValues.map((i) => {
                        return ((Bmultipliergainx * i) + Bmultiplieroffset)*Fuelcorrectionfactor;
                    }),
                    
                    borderColor: "green",
                    fill: false,
                    yAxisID: 'right'
                }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            id: 'left',
                            display: true,
                            position: 'left',
                            ticks: {
                                beginAtZero: true,
                                max: 20,
                                min: 0,
                                stepSize: 0.2
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'inj dose(ms)'
                            }
                        },
                        {
                            id: 'right',
                            display: true,
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                max: 2.5,
                                min: 0,
                                stepSize: 0.5
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'multiplier'
                            }
                    }],
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'MAP'
                            },
                            
                        }
                    ]
                },
                legend: { display: false },
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0
            }
        };

        new Chart("myChart1", args);


    }, [values]);

    const tableData = {
        staticInput: [
            { name: "No of Stokes", unit: "n", input: '<select class="" id="Noofstrokes" style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;"> <option>2</option><option  >4</option></select>' },
            { name: "Fuel Correction Factor", unit: "n", input: `<input type="number" id="Fuelcorrectionfactor" defaultValue ="1" name={"params.name"}  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" step="0.05" min="0.05" max="1"/>` },
            { name: "Nozzle Size", unit: "mm", input: `<input type="number" id="Nozzlesize" name={"params.name"} defaultValue ="1.4"style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" step="0.1" min="1.0" max="2.5"/>` },
            { name: "No of Cylinders", unit: "n", input: `<select class="" id="Noofcylinders" style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;"> <option >1</option></select>` },
            { name: "Starting dose", unit: "ms", input: `<input type="number" id="Startingdose" name={"params.name"} defaultValue ="5.0" style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" step="0.1" />` }
        ],

        dynamicInput: [
            { name: "Engine Speed", unit: "RPM", input: '<input readonly defaultValue="500" id="Enginespeed"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "Manifold Absolute Pressure", unit: "Bar", input: '<input id="MAP" readonly defaultValue="0.1"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "Exhaust Temperatire", unit: "Deg C", input: '<input readonly defaultValue="200" id="Exhausttemperature"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "Gas Temperature", unit: "Deg C", input: '<input readonly defaultValue="50" id="Gastemperature"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "Gas Presure", unit: "Bar", input: '<input readonly defaultValue="1.2" id="Gaspressure"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "PWM H", unit: "ms", input: '<input readonly defaultValue="0" id="PWMH"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
            { name: "PWM L", unit: "ms", input: '<input readonly defaultValue="0" id="PWML"  style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />' },
        ]

    }

    // Program
    useEffect(() => {
        function updateOP() {
            // Program inputs
            let Bmultipliergainx = -1;
            let Bmultiplieroffset = 2;

            let PWMHgainx2 = -15;
            let PWMHgainx = 30;
            let PWMHoffset = 1;

            // Declare pwmOutPin as an integer
            let pwmOutPin = 23;

            let Noofstrokes_e = document.getElementById("Noofstrokes");
            let Noofstrokes = Noofstrokes_e.options[Noofstrokes_e.selectedIndex].text;

            let Fuelcorrectionfactor = document.getElementById("Fuelcorrectionfactor").value;
            let Nozzlesize = document.getElementById("Nozzlesize").value;

            let Noofcylinders_e = document.getElementById("Noofcylinders");
            let Noofcylinders = Noofcylinders_e.options[Noofcylinders_e.selectedIndex].text;



            let Enginespeed = document.getElementById("Enginespeed").value;
            let MAP = document.getElementById("MAP").value;
            let Exhausttemperature = document.getElementById("Exhausttemperature").value;
            let Gastemperature = document.getElementById("Gastemperature").value;

            let PWMH = (((PWMHgainx2 * MAP * MAP) + (PWMHgainx * MAP) + PWMHoffset) * ((Bmultipliergainx * MAP) + Bmultiplieroffset) * Fuelcorrectionfactor);
            let PWML = (1000 - (PWMH * ((Enginespeed / 60) / (Noofstrokes / 2)))) / ((Enginespeed / 60) / (Noofstrokes / 2));

            document.getElementById("PWMH").value = PWMH;
            document.getElementById("PWML").value = PWML;


        }
        updateOP();
    }, [values]);
    

    return (<>
        <div className="container-fluid" style={{ padding: '2%' }}>
            <div className="row">
                <div className="col me-5">
                    <div className="row">
                        <div className="col">
                            <TableComponents title={"Static Input"} params={tableData.staticInput} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TableComponents title={"Dynamic Input"} params={tableData.dynamicInput} />
                        </div>
                    </div>

                </div>
                <div className="col ">

                    <div className="row mb-5 d-flex flex-row justify-content-end align-items-center">
                        <Navigation />
                    </div>
                    
                    <div className="row  mb-4">
                        <div className=" col-10 mx-auto" >
                            <canvas id="myChart1" ></canvas>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <Calibration/>
        <Correction values={values}/>
    </>)
}