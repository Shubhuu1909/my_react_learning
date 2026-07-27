import React from "react";

const Child = React.memo(({handleClick}) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={handleClick}>
        Child Button
      </button>
    </div>
  );
});

export default Child;