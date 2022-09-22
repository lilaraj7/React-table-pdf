import React, { useState, useEffect } from "react";
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf'

// import './apidata.css'

const Table= () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp);
        console.log(data, "data");
      });
    });
  }, []);
  return (
    <div>
      {data.map((props) => {
        const { email, name } = props;
        return (
          <table class="table">
  <thead>
 

  </thead>
  <tbody>
  <tr>
      <td>{name}</td>
      <td>{email}</td>
      {/* <td>@mdo</td> */}
    </tr>
  </tbody>
          </table>
          // <div className="new-container">
          //   <div className="main-name">
          //   <h1>Name:{name}</h1>
          //     </div>
          //     <div className="main-email">
          //   <h1>Email:{email}</h1>
          //   </div>
           
          // </div>
        );
      })}
      <button>pdf</button>
    </div>
  );
};
export default Table;
