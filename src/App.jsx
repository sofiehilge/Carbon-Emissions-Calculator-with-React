import React, { useState } from "react";
import Results from "./components/Results";
import useSite from "./hooks/useSite";
import Error from "./components/Error";
import "./App.css";
import ResisableSlider from "./components/ResisableSlider";
import { SiteProvider } from "./context/SiteContext";
import Comparison from "./components/Comparison";

function App() {
  const [url, setUrl] = useState("");
  const { data, refetch, fetchStatus, isError } = useSite(url);
  const isLoading = fetchStatus === "fetching";

  //check if data is available, and use a default value if not
  const site = data || { cleanerThan: 0 };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          height: "100%",
          paddingTop: "10px",
          paddingRight: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "4px",
        }}
      >
        <h1 style={{ fontSize: "36px" }}>
          How is your website impacting the planet?
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            refetch();
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
            placeholder="URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button type="submit">{isLoading ? "Loading..." : "Search"}</button>
        </form>
        <p style={{ maxWidth: "400px" }}>
          This app will do a test in real-time to calculate the carbon emissions
          generated per page view.
          <br />
          <br />
          This result is cached and will only test the same URL one every 24
          hours.
        </p>
      </div>
      <SiteProvider value={{ cleanerThan: site.cleanerThan }}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            paddingTop: "5px",
            paddingLeft: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data && <Results site={data} />}
          {isError && <Error />}
          {data && <ResisableSlider cleanerThan={site.cleanerThan} />}
          {data && <Comparison />}
        </div>
      </SiteProvider>
    </div>
  );
}

export default App;
