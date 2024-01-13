import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState({});
  
  // handle submit fn

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(input);
  };

  // handle all type of input fn

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    return setInput((pre) => {
      return { ...pre, [name]: value };
    });
  };
  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleInput} />
        </label>
        <br />
        <label>
          Age :
          <input type="number" name="age" onChange={handleInput} />
        </label>
        <br />
        <label>
          Course :
          <select name="course" onChange={handleInput}>
            <option value="">--select course--</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Bootstrap">Bootstrap</option>
          </select>
        </label>
        <br />
        <label>
          gender:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInput}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInput}
          />{" "}
          female
          <input
            type="radio"
            name="gender"
            value="others"
            onChange={handleInput}
          />{" "}
          others
        </label>
        <br />
        <label>
          Message <textarea name="message" onChange={handleInput} />
        </label>
        <br />
        <input type="submit" value="Submit form" />
        <br />
      </form>
      <div>
        <ul>

          {data &&
            Object.entries(data).map(([key, value]) => 
              <li key={key}>
                {key}:{value}
              </li>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
