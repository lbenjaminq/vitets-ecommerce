import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import { initializeApp } from 'firebase/app'
import firebaseConfig from "./config/firebase";

initializeApp(firebaseConfig);

function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
