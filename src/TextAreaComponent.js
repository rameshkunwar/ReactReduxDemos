import React, { useState } from "react";
import { useEffect } from "react";

const MyTextArea = (props) => {
  const [textBoxText, setTextBoxText] = useState("");

  const handleFormSubmit = (e) => {
    console.log(textBoxText);
  };
  const handleTextAreaTextChange = (e) => {
    setTextBoxText(e.target.value);
  };

  useEffect(() => {
    console.log("in use effect");
  }, []);
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-group'>
        <label htmlFor='exampleFormControlTextarea1'>Example textarea</label>
        <textarea
          onChange={handleTextAreaTextChange}
          value={textBoxText}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
        ></textarea>
      </div>
    </form>
  );
};
export default MyTextArea;
