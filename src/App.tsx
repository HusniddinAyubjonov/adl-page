import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/aboutPage/AboutPage"));
const PricingPage = lazy(() => import("./pages/PricingPage/PricingPage"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <h1
            style={{
              textAlign: "center",
              color: "#88B702",
              marginTop: "300px",
            }}>
            Loading...
          </h1>
        }>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/PricingPage' element={<PricingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
