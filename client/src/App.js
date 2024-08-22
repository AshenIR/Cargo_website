import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";



function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' exact element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
