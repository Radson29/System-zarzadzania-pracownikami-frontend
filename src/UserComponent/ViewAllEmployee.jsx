import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const ViewAllEmployee = () => {
  
  const [allEmployees, setallEmployees] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const getAllDepartment = async () => {
      const allEmployee = await retrieveAllEmployee();
      if (allEmployee) {
        setallEmployees(allEmployee.users);
      }
    };

    getAllDepartment();
  }, []);

  const retrieveAllEmployee = async () => {
    const response = await axios.get(
      "http://localhost:8081/user/fetch/all?role=employee"
    );
    console.log(response.data);
    return response.data;
  };

  const deleteEmployee = (userId) => {
    fetch("http://localhost:8081/user/delete?userId=" + userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        result.json().then((res) => {
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
          } else {
            console.log("Failed to delete the employee");
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

    setTimeout(() => {
      window.location.reload(true);
    }, 2000); // Reload after 3 seconds 3000
  };

  const viewSalary = (employeeSalary) => {
    console.log(employeeSalary);
    navigate("/employee/salary/detail", { state: employeeSalary });
  };

  const updateEmployee = (user) => {
    navigate("/user/update", { state: user });
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
          <h2>Wszyscy pracownicy</h2>
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
                  <th scope="col">Pracownik</th>
                  <th scope="col">Id pracownika</th>
                  <th scope="col">Imię</th>
                  <th scope="col">Nazwisko</th>
                  <th scope="col">Email</th>
                  <th scope="col">Kontakt</th>
                  <th scope="col">Dział</th>
                  <th scope="col">Doswiadczenie</th>
                  <th scope="col">Wiek</th>
                  <th scope="col">Płeć</th>
                  <th scope="col">Adres</th>
                  <th scope="col">Miasto</th>
                  <th scope="col">kod PIN</th>
                  <th scope="col">Szczegóły wynagordzenia</th>
                  <th scope="col">Akcja</th>
                </tr>
              </thead>
              <tbody>
                {allEmployees.map((employee) => {
                  return (
                    <tr>
                      <td>
                        <td>
                          <img
                            src={
                              "http://localhost:8081/user/image/" +
                              employee.user.image
                            }
                            class="img-fluid"
                            alt="product_pic"
                            style={{
                              maxWidth: "90px",
                            }}
                          />
                        </td>
                      </td>
                      <td>
                        <b>{employee.user.id}</b>
                      </td>
                      <td>
                        <b>{employee.user.firstName}</b>
                      </td>

                      <td>
                        <b>{employee.user.lastName}</b>
                      </td>
                      <td>
                        <b>{employee.user.emailId}</b>
                      </td>
                      <td>
                        <b>{employee.user.contact}</b>
                      </td>
                      <td>
                        <b>{employee.department[0].name}</b>
                      </td>
                      <td>
                        <b>{employee.user.experience}</b>
                      </td>
                      <td>
                        <b>{employee.user.age}</b>
                      </td>
                      <td>
                        <b>{employee.user.gender}</b>
                      </td>
                      <td>
                        <b>{employee.user.street}</b>
                      </td>
                      <td>
                        <b>{employee.user.city}</b>
                      </td>
                      <td>
                        <b>{employee.user.pincode}</b>
                      </td>
                      <td>
                        <button
                          onClick={() => viewSalary(employee.salary)}
                          className="btn btn-sm bg-color custom-bg-text"
                        >
                          Zobacz
                        </button>
                      </td>

                      <td>
                        <button
                          onClick={() => deleteEmployee(employee.user.id)}
                          className="btn btn-sm bg-color custom-bg-text"
                        >
                          Usuń
                        </button>

                        <button
                          onClick={() => updateEmployee(employee.user)}
                          className="btn btn-sm bg-color custom-bg-text ms-1"
                        >
                          Zaktualizuj
                        </button>
                        <ToastContainer />
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

export default ViewAllEmployee;
