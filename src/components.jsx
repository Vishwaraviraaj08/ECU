import React from 'react';
import parse from 'html-react-parser';


const TableComponents =  function ({title, params}){
    console.log( typeof  params[0].input);
    return(<>
        <h2 className={"text-light"}>{title}</h2>

        <table className="table table-dark table-hover">
            <thead>
            <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Parameters</th>
                <th scope="col">Input</th>
            </tr>
            </thead>
            <tbody>
            {params.map((param, index) => {
                return(
                    <tr>
                        <td scope="row">{index+1}</td>
                        <td>{param.name}</td>
                        <td>
                                {/*<input type="text" name={"params.name"} />*/}
                            <div className="input-group mb-3">
                                {
                                    parse(param.input)
                                }
                                <span className="input-group-text  bg-secondary text-light" id="basic-addon2" style={{height:'38px'}}>{param.unit}</span>
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

    const tableData = {
        staticInput: [
            {name: "No of Stokes", unit: "n", input:'<select class="form-select" id="exampleFormControlSelect1"> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>'},
            {name: "Fuel Correction Factor", unit: "n", input: `<input type="text" name={"params.name"} />`},
            {name: "Nozzle Size", unit: "cm", input: `<input type="text" name={"params.name"} />`},
            {name: "No of Cylinders", unit: "n", input: `<input type="text" name={"params.name"} />`},
        ],
        dynamicInput: [
            {name: "Engine Speed", unit: "RPM", value: 0},
            {name: "Manifold Absolute Pressure", unit: "Bar" , value: 0},
            {name: "Exhaust Temperatire", unit: "Deg C", value: 0},
            {name: "Gas Temperature", unit: "Deg C", value: 0},
        ],
        dynamicOutput: [
            {name: "PWM H", unit: "ms"},
            {name: "PWM L", unit: "ms"},
        ],

    }




    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <TableComponents title={"Static Input"} params={tableData.staticInput}/>
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <TableComponents title={"Dynamic Input"} params={tableData.dynamicInput}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <TableComponents title={"Dynamic Output"} params={tableData.dynamicOutput}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>)
}