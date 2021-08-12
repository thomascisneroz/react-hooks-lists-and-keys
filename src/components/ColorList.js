import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  /*using .map creates a new array from the array above for JSX allowing us to then use this new array Dynamically */
  const colorElements = colors.map((color) => {
    return <li key={color} style={{ color: color}}>
      {color}
      </li>;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
