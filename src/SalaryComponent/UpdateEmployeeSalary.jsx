import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const UpdateEmployeeSalary = () => {
  const location = useLocation();
  const salaryData = location.state;

  const [salary, setSalary] = useState(salaryData);

  const handleUserInput = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const saveEmployeeSalary = (e) => {
    fetch("http://localhost:8082/salary/update", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salary),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.href = "/home";
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Zaktualizuj wynagordzenie</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveEmployeeSalary}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>Id pracownika</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="userId"
                  name="userId"
                  onChange={handleUserInput}
                  value={salary.userId}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="bank" className="form-label">
                  <b>Nazwa banku</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bank"
                  name="bank"
                  onChange={handleUserInput}
                  value={salary.bank}
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">Numer konta bankowego</label>
                </b>
                <input
                  type="number"
                  className="form-control"
                  id="bankAccount"
                  name="bankAccount"
                  onChange={handleUserInput}
                  value={salary.bankAccount}
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">Kod SWIFT</label>
                </b>
                <input
                  type="text"
                  className="form-control"
                  id="bankIfsc"
                  name="bankIfsc"
                  onChange={handleUserInput}
                  value={salary.bankIfsc}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Wynagrodzenie</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="salary"
                  onChange={handleUserInput}
                  value={salary.salary}
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>Cykl płacowy</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="payCycle"
                >
                  <option value="0">Wybierz cykl płacowy</option>
                  <option value="Month">Miesięczny</option>
                  <option value="Quater">Kwartalny</option>
                  <option value="Year">Roczny</option>
                </select>
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="paymentMode" className="form-label">
                  <b>Metoda płatności</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="paymentMode"
                >
                  <option value="0">Wybierz metode płatności</option>
                  <option value="Bank Transfer">Przelew bankowy</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="fromDate" className="form-label">
                  <b>Od daty</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fromDate"
                  name="fromDate"
                  onChange={handleUserInput}
                  value={salary.fromDate}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="toDate" className="form-label">
                  <b>Do daty</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="toDate"
                  name="toDate"
                  onChange={handleUserInput}
                  value={salary.toDate}
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  value="Zaktualizuj"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeSalary;
