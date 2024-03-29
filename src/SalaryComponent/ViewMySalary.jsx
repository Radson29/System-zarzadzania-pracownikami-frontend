import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewMySalary = () => {
  const [salaries, setSalaries] = useState([]);

  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

  const retrieveEmployeeSalary = async () => {
    const response = await axios.get(
      "http://localhost:8082/salary/user/fetch?userId=" + employee.id
    );
    console.log(response.data);
    return response.data.salary;
  };

  useEffect(() => {
    const getAllSalary = async () => {
      const allSalary = await retrieveEmployeeSalary();
      if (allSalary) {
        setSalaries(allSalary);
      }
    };

    getAllSalary();
  }, []);

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>Szczegóły wynagrodzenia</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Wynagrodzenie</th>
                  <th scope="col">Od</th>
                  <th scope="col">Do</th>
                  <th scope="col">Metoda płatności</th>
                  <th scope="col">Cykl płacowy</th>
                  <th scope="col">Bank</th>
                  <th scope="col">Numer konta bankowego</th>
                  <th scope="col">Kod SWIFT</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map((salary) => {
                  return (
                    <tr>
                      <td>
                        <b>{salary.salary}</b>
                      </td>
                      <td>
                        <b>{salary.fromDate}</b>
                      </td>
                      <td>
                        <b>{salary.toDate}</b>
                      </td>
                      <td>
                        <b>{salary.paymentMode}</b>
                      </td>
                      <td>
                        <b>{salary.payCycle}</b>
                      </td>
                      <td>
                        <b>{salary.bank}</b>
                      </td>
                      <td>
                        <b>{salary.bankAccount}</b>
                      </td>
                      <td>
                        <b>{salary.bankIfsc}</b>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMySalary;
