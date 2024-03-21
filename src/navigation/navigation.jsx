import React from 'react'
import {Link} from "react-router-dom";

export default function Navigation() {
  return (
    <>
        {/* <div style={{width: 'fit-content'}} className={""}><Link to={'/'}><button type="button" className="btn btn-primary">Input</button></Link></div>
        <div style={{width: 'fit-content'}} className={""}><Link to={'/calibration'}><button type="button" className="btn btn-primary">calibaration</button></Link></div>
        <div style={{width: 'fit-content'}} className={""}><Link to={'/correction'}><button type="button" className="btn btn-primary">correction factor</button></Link></div> */}
        <img src="/images/abhivijay.png" alt="" style={{width: '100px', height:'auto', objectFit: 'contain', }}/>
        <img src="/images/spark.png" alt="" style={{width: '100px', height:'auto', objectFit: 'contain', }}/>
        <img src="/images/vebu.png" alt="" style={{width: '100px', height:'auto', objectFit: 'contain', }}/>
    </>
  )
}
