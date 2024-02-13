import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";
import Shop from "./routes/home/shop.component";

const Navigation = () => {
  return (
    <section>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </section>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
