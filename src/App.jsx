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
    <div className="p-4 m-4">
      <img
        src="https://withyodo.com/wp-content/uploads/2023/10/Yodos-Logo.svg"
        alt="Logo"
        className="m-4"
      />
      <div className="w-full p-4 bg-white rounded">
        <h1 className="mb-4 text-2xl font-bold">
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
            className="w-full p-2 mb-4 border border-black rounded"
            placeholder="Insert URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button
            className="p-2 px-12 mb-4 text-sm text-white bg-black rounded-full"
            type="submit"
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>
        <p className="max-w-lg">
          This app will do a test in real-time to calculate the carbon emissions
          generated per page view.
          <br />
          <br />
          This result is cached and will only test the same URL once every 24
          hours.
        </p>
      </div>
 <SiteProvider value={{ cleanerThan: site.cleanerThan }}>
      <div className="w-full mt-4">
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
