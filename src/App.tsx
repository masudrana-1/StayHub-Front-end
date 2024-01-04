import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout></Layout> } />
        <Route/>
        <Route/>
      </Routes>
    </Router>
  );
};

export default App;