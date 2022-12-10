
import React from "react";

const SearchBox = (props)=>{
    return (
        <div className="col col-sm-4">
            <input className="form-control" value={props.value} onChange={(e)=>props.setSearch(e.target.value)} type="text" placeholder="Enter Movie Name"/>
        </div>
    )
}

export default SearchBox;