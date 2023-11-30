import React, { useState } from "react";
import Results from "./components/Results";
import useSite from "./hooks/useSite";
import Error from "./components/Error";
import "./App.css";
import ResisableSlider from "./components/ResisableSlider";
import { SiteProvider } from "./context/SiteContext";
import Comparison from "./components/Comparison";
import Loader from "./components/Loader"; // Import the Loader component

function App() {
  const [url, setUrl] = useState("");
  const { data, refetch, fetchStatus, isError } = useSite(url);
  const isLoading = fetchStatus === "fetching";
  const site = data || { cleanerThan: 0 };

  return (
    <div className="p-4 m-4">
      <img
        src="https://withyodo.com/wp-content/uploads/2023/10/Yodos-Logo.svg"
        alt="Logo"
        className="my-4"
      />
      <div className="w-full p-4 mb-2 bg-white rounded-xl">
        <h1 className="my-4 text-2xl font-semibold">
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
            className="p-2 px-12 mb-6 text-sm text-white bg-black rounded-full"
            type="submit"
          >
            {isLoading ? "Loading..." : "Search ›"}
          </button>
        </form>
        <SiteProvider value={{ cleanerThan: site.cleanerThan }}>
          <div className="w-full">
            {isLoading && <Loader />} {/* Render Loader component */}
            {data && <Results site={data} />}
            {isError && <Error />}
            {data && <ResisableSlider cleanerThan={site.cleanerThan} />}
            {data && <Comparison />}
          </div>
        </SiteProvider>
      </div>
      <footer>
        <i className="w-full text-center">
          This app will do a test in real-time to calculate the carbon emissions
          generated per page view.
        </i>
      </footer>
    </div>
  );
}

export default App;
