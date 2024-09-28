import { useState } from "react";

const Welcome = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div className="welcome" data-testId='welcome'>
      <input type="text" name="searchBox" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="button" name="searchButton" value={'Submit'} onChange={(e) => setName(e.target.value)} />
        <p>
          Welcome, {name}!
        </p>
    </div>
  );
}

export default Welcome;
