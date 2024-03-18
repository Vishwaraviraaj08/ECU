import React from 'react';
import parse from 'html-react-parser';


const TableComponents =  function ({title, params}){
    console.log( typeof  params[0].input);
    return(<>
        <h2 className={"text-light"}>{title}</h2>

        <table className="table table-dark table-hover mb-5">
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
                        <td style={{width: '300px'}}>{param.name}</td>
                        <td>
                                {/*<input type="text" name={"params.name"} />*/}
                            <div className="input-group">
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
            {name: "No of Stokes", unit: "n", input:'<select class="" id="exampleFormControlSelect1" style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;"> <option>2</option><option>4</option></select>'},
            {name: "Fuel Correction Factor", unit: "n", input: `<input type="number" name={"params.name"} style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" step="0.05" min="0.05" max="1"/>`},
            {name: "Nozzle Size", unit: "mm", input: `<input type="number" name={"params.name"} style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" step="0.1" min="1.0" max="2.5"/>`},
            {name: "No of Cylinders", unit: "n", input: `<select class="" id="exampleFormControlSelect1" style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;"> <option>1</option></select>`},
        ],

        dynamicInput: [
            {name: "Engine Speed", unit: "RPM", input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
            {name: "Manifold Absolute Pressure", unit: "Bar" , input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
            {name: "Exhaust Temperatire", unit: "Deg C", input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
            {name: "Gas Temperature", unit: "Deg C", input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
        ],
        dynamicOutput: [
            {name: "PWM H", unit: "ms", input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
            {name: "PWM L", unit: "ms", input:'<input value="0" readonly style="width:200px; padding-left: 20px; border-radius: 5px 0 0 5px;" />'},
        ],

    }




    return(<>
        <div className="container-fluid" style={{padding: '2%'}}>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <TableComponents title={"Static Input"} params={tableData.staticInput}/>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col">
                           <TableComponents title={"Dynamic Input"} params={tableData.dynamicInput}/>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col">
                           <TableComponents title={"Dynamic Output"} params={tableData.dynamicOutput}/>
                       </div>
                    </div>
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