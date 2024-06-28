import React from 'react';

function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      <div style={{ height: '66px' }}>
        {props.alert ? (
          <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.alertType)}</strong>: {props.alert.msg}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Alerts;
