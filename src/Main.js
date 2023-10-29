import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App"; //공통페이지
import Order from "./components/order";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Order />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
