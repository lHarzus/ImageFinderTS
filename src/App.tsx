import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
