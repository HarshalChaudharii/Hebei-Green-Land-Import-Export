import { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import DefaultLayout from "./layout/DefaultLayut";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {routes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={
                  <Suspense fallback={<Loader />}>
                    <DefaultLayout>{item.component}</DefaultLayout>
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
