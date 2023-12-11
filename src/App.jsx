import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import useSite from "./hooks/useSite";
import Error from "./components/Error";
import "./App.css";
import ResisableSlider from "./components/ResisableSlider";
import { SiteProvider } from "./context/SiteContext";
import Comparison from "./components/Comparison";
import Loader from "./components/Loader"; // Import the Loader component
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  const [url, setUrl] = useState("");
  const { data, refetch, isError } = useSite(url);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWithDelay, setIsLoadingWithDelay] = useState(true);

  const site = data || { cleanerThan: 0 };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingWithDelay(true);
      try {
        setIsLoading(true);
        //simulate fetching data
        //replace this with you actual data fetching logic
        const response = await fetch("your-api-endpoint");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
        //set isLoading to false after a delay of 3 seconds
        setTimeout(() => {
          setIsLoadingWithDelay(false);
        }, 3000);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div>
        <Background />
        <Navbar />
      </div>

      <div className="p-4 m-4 absolute">
        <div className="flex justify-center items-center my-16">
            <h1 className="text-2xl text-white w-max md:text-4xl font-Montserrat top">
              Calculate your emission with Yodo
            </h1>
        </div>
          
        <div className="w-full p-4 mb-2 bg-white rounded-xl">
          <div className="flex justify-center pt-6 pb-6">
            <h2 className="my-4 text-3xl text-black font-Montserrat">
              How is your website impacting the planet?
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              refetch();
            }}
          >
            <input
              type="text"
              className="w-full p-2 mb-4 border border-black rounded font-Inter"
              placeholder="Insert URL"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <button
              className="p-2 px-12 mb-6 text-sm text-white bg-black rounded-full font-Inter"
              type="submit"
            >
              {isLoadingWithDelay ? "Loading..." : "Search ›"}
            </button>
          </form>
          <SiteProvider value={{ cleanerThan: site.cleanerThan }}>
            <div className="w-full">
          
              {!isLoadingWithDelay && data && <Results site={data} />}
              {!isLoadingWithDelay && isError && <Error />}
              {/* {!isLoadingWithDelay && data && <ResisableSlider cleanerThan={site.cleanerThan} />} */}
              {!isLoadingWithDelay && data && <Comparison />}
            </div>
          </SiteProvider>
        </div>
        <footer>
          <p className="w-full text-xs text-white text-center font-Montserrat">
            This app will do a test in real-time to calculate the carbon
            emissions generated per page view.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
