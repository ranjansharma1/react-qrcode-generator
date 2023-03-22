import React from "react";

function Alert(props) {
    const Captalised=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);        
    }
  return (
      // Here we use the props.alert to check if the alert is null or not
    <div style={{height:'60px',marginTop:"60px"}}>
        {props.alert &&<p className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
          <strong>{Captalised(props.alert.type)}! </strong> {props.alert.msg}
          <button type="button"  className="btn-close"  data-bs-dismiss="alert" aria-label="Close"></button>
        </p>}
      </div>
  );
}

export default Alert;