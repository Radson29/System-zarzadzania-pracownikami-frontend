import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewEmployeeSalary = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const salaryData = location.state;

  const updatesalary = (salaryData) => {
    navigate("/employee/salary/update", { state: salaryData });
  };

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
                  <th scope="col">kod SWIFT</th>
                  <th scope="col">Akcja</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((salary) => {
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

                      <td>
                        <button
                          onClick={() => updatesalary(salary)}
                          className="btn btn-sm bg-color custom-bg-text"
                        >
                         Zaktualizuj
                        </button>
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

export default ViewEmployeeSalary;
