import React, { useEffect, useState } from "react";
import data from "./data";
import Person from "./Person";
const App = () => {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    if (people.length === 0) {
      setTimeout(() => {
        setPeople(data);
      }, 3000);
    }
  }, [people]);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <Person key={person.id} {...person} />
        ))}
        <button className="btn btn-block" onClick={() => setPeople([])}>
          {people.length > 0 ? "Clear All" : "No Birthdays Left"}
        </button>
      </section>
    </main>
  );
};
export default App;
