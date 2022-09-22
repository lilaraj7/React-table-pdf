import React,{useEffect,useState} from 'react';
import './App.css';
import MaterialTable from 'material-table'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const studentData = [
  
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 2,
    name: "Vikas",
    email: "vikas@gmail.com",
    year: 2013,
    fee: 785462,
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
    year: 2020,
    fee: 784596,
  }
]
function App() {
  const [getproperty, setGetproperty] = useState([]);

  useEffect(() => {
    fetch(
      "https://testing.esnep.com/gharelukam/api/recent-property?Purpose=2"
    ).then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        console.log("asda", getproperty);
        setGetproperty(resp.RecentPropertie);
      });
    });
  }, []);
  const columns = [
    { title: "Name", field: "name", },
    { title: "Email", field: "email", },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: 'fee', type: "currency" }]

 
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Student Details", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: studentData
    })
    doc.save('table.pdf')
  }
  

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Export Data to Pdf in Material Table</h4>
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={studentData}
        actions={[
         
          {
            icon: () => <AddToPhotosIcon/>,// you can pass icon too
            tooltip: "Export to Pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          }
        ]}
      />
    </div>
  );
}

export default App;

// import React from "react";
// import axios,{AxiosResponse} from 'axios';
// // import { get} from 'lodash-es';
// import { MdLocationPin } from "react-icons/md";
// import { BsFillHouseDoorFill } from "react-icons/bs";
// function App(){
//   const rest = axios.create({
//     baseURL:''
//   })
//   const getPdf =()=>(
//     rest.get(`/get-pdf`,{
//       params:{
// cacheBustTimestamp:DataTransfer.now(),
//       },
//       responseType:'blob',
//       timeout:120,
//       headers:{
//         Accept:'application/octet-stream',
//       }
//     })
//   )
//   return(
//     <>
//      <div className="col-md-4">
//                     <div className="card">
//                       <img className="card-img-top" alt="" src={UserImage} />
//                       <span className="stiker">{Purpose}</span>
//                       <div className="card-body">
//                         <h1 className="card-title">{Title}</h1>
//                         <h5 className="h5">
//                           <MdLocationPin />
//                           {Address}
//                         </h5>
//                         <p>
//                           <span>
//                             <BsFillHouseDoorFill /> {Area} {AreaUnit}
//                           </span>
//                           <span>Rs {Price}</span>
//                         </p>
//                       </div>
//                       <div className="card-owner">
//                         <p>
//                           {UserImage} {UserFullName}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//     </>
//   )
// }
// export default App;