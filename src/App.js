import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLy from "./layouts/ClientLy";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLy />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
