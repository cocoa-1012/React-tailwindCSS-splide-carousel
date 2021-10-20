import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useRef, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const handleChange = () => {
    setCurrentIndex(ref.current.splide.index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pt-6">
      <h2 className="-top-8 pb-4 text-lg font-bold ml-5 sm:ml-0">
        This is the title
      </h2>
      <div className="App">
        <Splide
          ref={ref}
          options={{
            type: "slide",
            rewind: "false",
            perPage: 3,
            perMove: 3,
            gap: "1rem",
            pagination: false,
          }}
          renderControls={() => (
            <div className="absolute flex w-4 h-4 space-x-6 splide__arrows -top-8 right-12 invisible sm:visible">
              <div className="splide__arrow-prev" role="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={currentIndex === 0 ? "red" : "black"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </div>
              <div className="splide__arrow-next" role="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={
                    !!ref.current &&
                    currentIndex === ref.current.splide.length - 3
                      ? "red"
                      : "black"
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          )}
          onPaginationUpdated={handleChange}
        >
          <SplideSlide>
            <div className="bg-red-300">one</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">two</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">three</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">four</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">five</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">six</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">seven</div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-red-300">eight</div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default App;
