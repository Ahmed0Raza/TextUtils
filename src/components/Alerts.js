import React from 'react'

function Alerts(props) {
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  if(props.alert)
  return (
    <>
      <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.alertType)}</strong>: {props.alert.msg}
     </div>
    </>
  )
}

export default Alerts
