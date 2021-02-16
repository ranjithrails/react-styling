import React from "react";


const pStyle = {
  fontSize: '16px',
  color: 'blue'
};

export default function Alert() {
  return (
  <>
  <h1 style={{ color: "red" }}>Hello World</h1>
  <h1 style={{ textAlign: "center" }}>Hello World</h1>
  <p style={pStyle}>The weather is sunny with a small chance of rain today.</p>
  </>
  );
}