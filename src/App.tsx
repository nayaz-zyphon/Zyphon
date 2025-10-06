import CommonLayout from "./layout/CommonLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CommonLayout>
                <Hero />
              </CommonLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;