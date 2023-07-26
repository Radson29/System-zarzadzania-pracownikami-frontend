import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import employees from "../images/employees.png";
import managers from "../images/managers.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-color">
            Witamy w systemie zarządzania pracownikami
            </h1>
            <p>
              System Zarządzania Pracownikami to kompleksowe rozwiązanie dla
              zarządzania pracownikami i ich informacjami w organizacji. To
              pomaga usprawnić różne procesy HR, takie jak pracownik
              onboarding, śledzenie obecności, zarządzanie wydajnością i nie tylko.
            </p>
            <p>
              Dzięki naszemu systemowi administratorzy mogą sprawnie zarządzać pracownikami
              rejestrować, przypisywać role i uprawnienia, generować raporty i
              nadzór nad całościowym przepływem pracy w zarządzaniu pracownikami. Pracownicy mogą
              uzyskiwać dostęp do ich profili, przeglądać ich harmonogramy, prosić o urlop i
              komunikować się ze swoimi przełożonymi. Menedżerowie mogą łatwo śledzić
              wydajność pracowników, zatwierdzać wnioski i zapewniać płynność
              operacji w swoich zespołach.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Zacznij
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={employees}
              alt="Logo"
              width="400"
              height="400"
              className="home-image"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img
              src={managers}
              alt="Logo"
              width="400"
              height="400"
              className="home-image"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-color ms-5">Zarządzaj pracownikami i menedżerami</h1>
            <p className="ms-5">
              Uprość proces zarządzania danymi pracowników wraz z ich danymi
              informacje o wynagrodzeniach. Pozwala na to System Zarządzania Pracownikami
              łatwo przechowywać i aktualizować dane pracowników, takie jak dane osobowe
              informacje, dane kontaktowe, stanowiska pracy i zapisy wynagrodzeń.
              Śledź wynagrodzenia pracowników, świadczenia i listy płac.
        
            </p>
            <p className="ms-5">
              Efektywnie zarządzaj menedżerami i działami pracowniczymi z naszym
              System Zarządzania Pracownikami. Przypisz menedżerów do określonych
              działów, delegować obowiązki i nadzorować
              wydajność zarówno menedżerów, jak i ich zespołów.
              Usprawnij komunikację, współpracę i podejmowanie decyzji
              w działach w celu poprawy wydajności i koordynacji.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
             Zacznij
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
