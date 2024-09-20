import { useState } from "react";

const Welcome = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div className="welcome" data-testId='welcome'>
        <textarea value={name} onChange={(e) => setName(e.target.value)} />
        <p>
          Welcome, {name}!
        </p>
    </div>
  );
}

export default Welcome;
