import React from "react";

const ProgressBar = ({value, color}) => {
  const valueInPercent = Number(value) * 100;

  return (
    <div 
        style={{
        border: `1px solid black`,
        backgroundColor: '#7d7d7d',
        overflow: "hidden",
        width: "100%",
        height: '0.75rem',
        borderRadius: '2rem',
    }}>
    
    <div
        style={{ 
            maxWidth: `${valueInPercent}%`, 
            height: "100%",
            backgroundColor: `${color}`,
        }}
    />
    </div>
  );
  
};

export default ProgressBar