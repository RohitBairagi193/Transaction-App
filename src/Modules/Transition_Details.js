import React, { useState } from 'react'
import './Transition_Details.css'
  
export default function TrasitionDetails(props) {
    const [trans, setTrans] = useState(props.trans);
    
    const OnChangetrans = () => {
        setTrans("Received");
        if (trans === "Send") {
            console.log("successfully send");
        } else {
            alert("you send money previously, not send again");
        }
    };

    return (
        <>
            <tr> 
                <td>{props.sno}</td>
                <td id='tdnamewidth'>{props.name}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>Rs. {props.amount}</td> 
                <td><button onClick={OnChangetrans}>{trans}</button></td>
            </tr>
        </>
    )
    
}