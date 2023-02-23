import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/Auth";
import Pages from "./pages"


function App() {
  let { currentUser } = useAuth()
  let isAuthenticated =  currentUser === null?false:true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/app"} replace={true} />} />
        <Route path="/app">
          <Route path=""element={isAuthenticated?<Pages.Home />:<Navigate to="/app/login" />} />
          <Route path="login" element={isAuthenticated?<Navigate to="/app" replace />:<Pages.Login />}/>
          <Route path="create" element={isAuthenticated?<Pages.CreateUrl />:<Navigate to="/app/login" replace />} />
          <Route path="profile" element={isAuthenticated?<Pages.Profile />:<Navigate to="/app/login" replace />} />
          <Route path="urls" element={isAuthenticated?<Pages.AllUrls />:<Navigate to="/app/login" replace />} />
        </Route>
        <Route path="/:code" element={<Pages.CodeHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
