import React from "react";
import "./HcdTemplate.css";

function HcdTemplate(props) {
  const shortid = require("shortid");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  var today = dd + '/' + mm + '/' + yyyy;
  const downloadPdf = () => {
    var c = (document.getElementById("button").style.display = "none");
    window.print();
  };

  return (
    <>
      <div id="Template">
        <div
          className="container"
          style={{
            height: "100%",
            padding: "30px 30px 30px 30px",
          }}
        >
          <div className="row">
            <div className="d-flex justify-content-start" style={{color:'#D3D3D3'}}>
            <b> HR/F/8</b>
            </div>
            <div className="d-flex justify-content-end">
              <img
                src="https://www.telligent.com/content/uploads/2019/08/coMakeIT-Logo.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "80px",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-start">
              Date: <b>&nbsp;{today}</b>
            </div>
          </div><br/>
          <div className="row">
            <div className="d-flex">
              <b>Hiring confirmation form</b>
            </div>
          </div><br/>
          <div className="row">
            <div>
              Hereby, we confirm that coMakeIT may start the necessary procedures to on-board the below Software Engineer to the <b> {props.data.clientname} </b> India team <br /><br />
              The monthly gross salary of the candidate mentioned in the document is final and <b> {props.data.clientname} </b> will be notified in case there are any deviations in the costs.

            </div>
          </div>
          <br />
          <div className="row d-flex justify-content-center">
            <table style={{ width: "90%" }}>
              <tr>
                <th>
                  <b>CANDIDATE NAME</b>
                </th>
                <th>
                  <b>Monthly Gross Salary(Indian Rupees)</b>
                </th>
                <th>
                  <b>Date of joining</b>
                </th>
                <th>
                  <b>Remarks</b>
                </th>
              </tr>
              {props.data.empdata.map((element) => {
                return (
                  <tr key={element.name}>
                    <td>{element.candidatename}</td>
                    <td>{element.grossSalary}</td>
                    <td>{element.tentativestartdate}</td>
                    <td>{element.remarks}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <br />
          <br />
          <div className="row">
            <div>
              <b>{props.data.clientname}</b> agrees that coMakeIT may take the necessary steps to on-board the engineer to the team. 
                CoMakeIT agrees to keep the customer informed of the progress with on boarding process.
            </div>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col-5 justify-content-start">
              <div>
                For coMakeIT India
                <br />
                <img
                  src={props.data.url}
                  alt=""
                  style={{
                    width: "70px",
                    height: "30px",
                  }}
                />
                <br /><br />
                Name:
                <b>{props.data.hiringmanagername}</b>
                <br /><br />
                Designation:
                <b>{props.data.Mdesignation}</b>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <div>
                For <b>{props.data.clientname}</b>
                <br />
                <img
                  
                  alt=""
                  style={{
                    width: "70px",
                    height: "30px",
                  }}
                />
                <br /><br/>
                Name:  <br /><br />
                Designation: 

              </div>
            </div>
          </div>
          <div class="row" style={{position:'fixed',bottom:'0',marginBottom:'10px',fontSize:'10px',color:'#D3D3D3'}}>
            <div className="col">
            www.comakeit.com
            </div>
          <div className="col">
            <b>NETHERLANDS</b><br/>
            coMakeIT B.V
            Stationsplein 62, 3743 KM Baarn
            The Netherlands
            <b>P</b> +31 35 303 5630

          </div>
          <div className="col">
              
            <b>INDIA</b><br/>
            Plot No.654/4 39, Road No.92, Jubilee Hills,
            Hyderabad 500 03, India
            <br/><br/>
            9th Floor, A wing, Aurobindo Galaxy, Madhapur, Hyderabad 500019, India
            <b>P</b> +91 40 40351000, +91 45454757

            </div>
          </div>

          </div>
        
        <button
          type="button"
          className="btn btn-primary btn-dark"
          onClick={downloadPdf}
          id="button"
          style={{ marginLeft: '17%' }}
        >
          Click Here To Download
        </button>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default HcdTemplate;
