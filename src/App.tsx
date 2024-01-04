import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

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
        <Route/>
      </Routes>
    </Router>
  );
};

export default App;