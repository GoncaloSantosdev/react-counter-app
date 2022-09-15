import React from "react";

const AddRemoveButton = ({ addRemoveFunction, buttonName, count }) => {
  return (
    <>
      <button
        onClick={() => {
          addRemoveFunction(count);
        }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default AddRemoveButton;