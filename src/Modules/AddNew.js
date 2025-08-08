import React, { useState } from 'react';

import './Transition_Details.css'
function AddNew({ onAdd }) {
  const [formData, setFormData] = useState({
    Snumber: '',
    Nameof: '',
    DateString: '',
    timeString: '',
    Amountof: '',
    transof: 'Send'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const date = new Date(`${formData.DateString}T${formData.timeString}`);

    
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

   
    const formattedData = {
      ...formData,
      DateString: formattedDate,
      timeString: formattedTime
    };

    onAdd(formattedData);

    setFormData({
      Snumber: '',
      Nameof: '',
      DateString: '',
      timeString: '',
      Amountof: '',
      transof: 'Send'
    });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <table className="transition-details">
        <tbody >
          <tr>
            <td><input type="number" name="Snumber" placeholder="S.No." value={formData.Snumber} onChange={handleChange} required /></td>
            <td><input type="text" name="Nameof" placeholder="Name" value={formData.Nameof} onChange={handleChange} required /></td>
            <td id='tdwidth1'><input type="date" name="DateString" value={formData.DateString} onChange={handleChange} required /></td>
            <td id='tdwidth2'><input type="time" name="timeString" value={formData.timeString} onChange={handleChange} required /></td>
            <td id='tdwidth3'><input type="number" name="Amountof" placeholder="Amount" value={formData.Amountof} onChange={handleChange} required /></td>
            <td>
              <select name="transof" value={formData.transof} onChange={handleChange}>
                <option value="Send">Send</option>
                <option value="Receive">Receive</option>
              </select>
            </td>
            </tr>
        </tbody>
      </table>
      <button id='btnform' type="submit">Add Transition</button>
    </form>
  );
}

export default AddNew;