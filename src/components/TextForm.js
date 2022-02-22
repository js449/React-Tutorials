import React, {useState} from 'react'

export default function TextForm(props) {
     //here text is my variable which will have the useState current value and 
//settext is a function for text means we can update the text everytime with the help of setText function(just memorise this one)
const[text, setText] = useState('Enter text here');
// text = "new text"; //wrong way to change the state
// setText("new text"); //right way


    const handleOnClick = () =>{
        console.log("uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("you clicked on handleOnClick");
    }
    const handleOffClick = () =>{
        // console.log("lowerrcase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        // setText("you clicked on handleOnClick");
    }
    
    const handleClearText = () =>{
        // console.log("lowerrcase button was clicked" + text);
        let newText = "";
        setText(newText);
        // setText("you clicked on handleOnClick");
    }
    
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value); //important this way we are setting up new text whenever we are updating text variable 
                                    //or can say whenever a event change(means this way we can write new text in the text variable)
    }

  return (
    <>
      <div className='container'>
      <h1>{props.heading} </h1>
  <div className="mb-3">
      {/* onChange function needs when the value of text change or can say a event change */}
    <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  {/* handleOnClick function will run once we click the  button */}
  <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleOffClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear the text</button>
  </div>
  {/* my-2 give some margin */}
  <div className="container my-2">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    {/* time taken to read the text */}
    <p>{0.08 * text.split(" ").length} mintues read</p>
    {/* to previes text */}
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
