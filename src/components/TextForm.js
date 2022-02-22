import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnClick = () =>{
        console.log("uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("you clicked on handleOnClick");
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value); //important this way we are setting up new text whenever we are updating text variable 
                                    //or can say whenever a event change(means this way we can write new text in the text variable)
    }
    //here text is my variable which will have the useState current value and 
//settext is a function for text means we can update the text everytime with the help of setText function(just memorise this one)
const[text, setText] = useState('Enter text here 2');
// text = "new text"; //wrong way to change the state
// setText("new text"); //right way
  return (
      <div>
      <h1>{props.heading} </h1>
  <div className="mb-3">
      {/* onChange function needs when the value of text change or can say a event change */}
    <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  {/* handleOnClick function will run once we click the  button */}
  <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
  </div>
  )
}
