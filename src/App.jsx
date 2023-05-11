import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const [toggle, setToggle] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  }

  const resetPeople = () => {
    setPeople(toggle);
  }
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length === 0 ? (
          <button type="button" className="btn btn-block" onClick={resetPeople}>
            Show All
          </button>
        ) : (
          <button type="button" className="btn btn-block" onClick={clearPeople}>
            Clear All
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
