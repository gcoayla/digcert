import React, { useState } from "react";

const balls = ({ active }) => {
  return (
    <div className="ballsWrapper">
      <div className={`ball ${active === 0 ? "active" : ""}`}></div>
      <div className={`ball ${active === 1 ? "active" : ""}`}></div>
      <div className={`ball ${active === 2 ? "active" : ""}`}></div>
    </div>
  );
};

export const MainScreen = () => {
  const mockData = [
    { url: "https://www.google.com/", edge: 2, chrome: 2, firefox: 2 },
    { url: "https://www.facebook.com/", edge: 0, chrome: 1, firefox: 2 },
    { url: "https://www.instagram.com/", edge: 1, chrome: 0, firefox: 0 },
    { url: "https://www.twitter.com/", edge: 1, chrome: 0, firefox: 0 },
  ];

  const [urlsData, setUrlsData] = useState(mockData);

  return (
    <div className="mainScreenWrapper">
      <header>
        <h1>Digital Certificates Trust Verifier</h1>
        <form className="formWrapper">
          <input type="text" id="url" name="url" className="urlInput" />
          <input type="submit" value="Verificar" className="urlButton" />
          <button type="button" className="urlButton">
            Cargar en lote
          </button>
        </form>
      </header>
      <section className="mainSection">
        <div className="rowNames">
          <h3>Microsoft Edge</h3>
          <h3>Google Chrome</h3>
          <h3>Mozilla Firefox</h3>
        </div>
        {urlsData.map((item) => (
          <div className="row">
            <h3 className="urlDir">{item.url}</h3>
            <div className="ballsGeneralWrapper">
              {balls({ active: item.edge })}
              {balls({ active: item.chrome })}
              {balls({ active: item.firefox })}
            </div>
          </div>
        ))}
      </section>
      <footer>
        <a href="">Ver Mozilla Trust Store</a>
        <a href="">Ver Microsoft Trust Store</a>
        <a href="">Ver Google Trust Store</a>
      </footer>
    </div>
  );
};

export default MainScreen;
