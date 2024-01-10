import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
          <Layout>
            <h1>Home Page</h1>
            </Layout>}
        />
        <Route
          path="/search"
          element={
          <Layout>
            <h1>Search Page</h1>
          </Layout> }
        />
        <Route path="/register" element={ <Layout><Register/></Layout> } />
        <Route path="/sign-in" element={ <Layout><SignIn/></Layout> } />
      </Routes>
    </Router>
  );
};

export default App;