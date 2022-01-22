import React ,{Component}from "react";
import shivi from "./shivi.gif";
  class Spinner extends Component{
  render(){
    return(
      <div className="text-center">
          <img className="my-3" src={shivi}alt="Spinnerr"/>
      
      </div>
    )
  }
}

export default Spinner;
