//once npm starts we only see the code written in App.js file
import logo from "./logo.svg";
import "./App.css";

//variable
let name = "jay";
function App() {
  return (
    //JSX Fragment starts here --- from here()
    <>
      <nav>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
      </nav>
      <div className="container">
        {/* whatever written in curly braces is javascript(this is how we write javascript inside JSX) */}
        <h1>Hello {name}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam,
        sequi libero harum eaque fugit sapiente quis, natus quisquam nostrum
        possimus, vero asperiores nulla consectetur illum cumque deleniti
        adipisci maiores? A quibusdam in iste reiciendis modi, provident
        voluptate quas consequuntur. Fuga, harum sapiente ducimus facere nostrum
        quidem delectus doloribus sed accusamus eveniet autem, asperiores odio
        quia odit, animi itaque labore! Culpa earum ullam quia cupiditate
        inventore iure quidem accusantium dolorum dolor! Libero, nesciunt,
        aliquam sed fuga provident vero odio laboriosam blanditiis ad
        reprehenderit minus ex officia nobis voluptatibus cumque pariatur!
      </div>
      <div className="blank">Let's Go!</div>
    </>
    //JSX --- end here
  );
}

export default App;
