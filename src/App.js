import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pages from "./pages"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app">
          <Route path="" element={<Pages.Home />}/>
          <Route path="login" element={<Pages.Login />}/>
          <Route path="create" element={<Pages.CreateUrl />} />
        </Route> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
