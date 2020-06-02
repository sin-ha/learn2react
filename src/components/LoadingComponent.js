import React from "react";

export const Loader = ()=>{
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading . . .</p>
        </div>
    )
}