import './App.css';
import React, { useState } from 'react';
import TransitionDetails from './Modules/Transition_Details';
import AddNew from './Modules/AddNew';


function App() {
  const [person, setPerson] = useState([
    {
      Snumber: 1,
      Nameof: "person1",
      DateString: new Date(2024, 8, 4).toLocaleDateString(),
      timeString: new Date(2024, 8, 4, 7, 58).toLocaleTimeString(),
      Amountof: 2000,
      transof: "Send"
    },
    {
      Snumber: 2,
      Nameof: "person2",
      DateString: new Date(2024, 8, 5).toLocaleDateString(),
      timeString: new Date(2024, 8, 5, 8, 30).toLocaleTimeString(),
      Amountof: 100,
      transof: "Send"
    },
    {
      Snumber: 3,
      Nameof: "person3",
      DateString: new Date(2024, 8, 6).toLocaleDateString(),
      timeString: new Date(2024, 8, 6, 9, 15).toLocaleTimeString(),
      Amountof: 200,
      transof: "Send"
    },
    {
      Snumber: 4,
      Nameof: "person4",
      DateString: new Date(2024, 8, 7).toLocaleDateString(),
      timeString: new Date(2024, 8, 7, 10, 45).toLocaleTimeString(),
      Amountof: 1500,
      transof: "Send"
    },
    {
      Snumber: 5,
      Nameof: "person5",
      DateString: new Date(2024, 8, 8).toLocaleDateString(),
      timeString: new Date(2024, 8, 8, 11, 20).toLocaleTimeString(),
      Amountof: 2000,
      transof: "Send"
    },
  ]);

  const addNewTransition = (newTransition) => {
    setPerson([...person, newTransition]);
  };

  return (
    <>
      <div className="heading">
        <h2>Transiction Details</h2>
      </div>

      <table className="transition-details">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Send/Receive</th>
          </tr>
        </thead>
        <tbody>
          {person.map((p, index) => (
            <TransitionDetails
              key={index}
              sno={p.Snumber}
              name={p.Nameof}
              date={p.DateString}
              time={p.timeString}
              amount={p.Amountof}
              trans={p.transof}
            />
          ))}
          
        </tbody>
      </table>
      <AddNew onAdd={addNewTransition} />
      
    </>
  );
}


export default App;
