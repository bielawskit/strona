import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const getNavLinkClass = (path) => {
    return activeTab === path ? 'active' : '';
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="#" onClick={() => setActiveTab('home')}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <nav className="App-nav">
          <ul>
            <li
              className={getNavLinkClass('company')}
              onClick={() => setActiveTab('company')}
            >
              Dla Firm
            </li>
            <li
              className={getNavLinkClass('about')}
              onClick={() => setActiveTab('about')}
            >
              O Nas
            </li>
            <li
              className={getNavLinkClass('contact')}
              onClick={() => setActiveTab('contact')}
            >
              Kontakt
            </li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        {activeTab === 'home' && (
          <div className="image-container">
            <img src="\images\externally_driven.jpg" alt="Externally driven" />
            <div className="text-content">
              <h1>
                BMP Solutions P.S.A. PSA SKA <strong>w likwidacji</strong>
              </h1>
              <p>
                Uchwałą Walnego Zgromadzenia BMP Solutions P.S.A. PROSTA SPÓŁKA AKCYJNA
                spółka komandytowo-akcyjna w likwidacji z siedzibą w Krakowie przy ul.
                Piłsudskiego 19/22, wpisanej do Krajowego Rejestru Sądowego pod numerem
                KRS 0000941118, rozwiązano Spółkę i otwarto jej likwidację.
              </p>
              <h1>BMP Solutions P.S.A. PSA SKA</h1>
              <p>
                Dostarczamy doświadczonych profesjonalistów na każde wyzwanie biznesowe
                z obszarów:
              </p>
              <ul>
                <li>zarząd</li>
                <li>due diligence</li>
                <li>restrukturyzacja, zarządzanie zmianą</li>
                <li>zarządzanie strategiczne</li>
                <li>finanse</li>
              </ul>
              <p>
                Współpracuj z doświadczonymi profesjonalistami i ekspertami. BMP
                Solutions P.S.A. PSA SKA zapewnia doświadczonych menadżerów i ekspertów
                z obszaru finansów i zarządzania biznesowego, z którymi sprawnie
                zrealizujesz każdy projekt.
              </p>
            </div>
            <img src="\images\improvement.jpg" alt="Improvement" />

            {/* Tutaj dodajemy sekcję z linkami do PDF-ów */}
            <div className="pdf-links">
              <h2>Dokumenty do pobrania:</h2>
              <ul>
                <li>
                  <a
                    href="/MSIG_108_2024_I ogłoszenie.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSIG_108_2024_I ogłoszenie
                  </a>
                </li>
                <li>
                  <a
                    href="/MSIG_129_2024_II ogłoszenie.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSIG_129_2024_II ogłoszenie
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'company' && (
          <div id="company">
            <p>Strona w Budowie</p>
          </div>
        )}
        {activeTab === 'about' && (
          <div id="about">
            <p>Strona w Budowie</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div id="contact">
            <p>Email: bmpsolutions.psa.ska@gmail.com</p>
            <p>Tel: 664 388 670</p>
            <p>Adres: ul. Marszałka Józefa Piłsudskiego 19/22, 31-110 Kraków</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
