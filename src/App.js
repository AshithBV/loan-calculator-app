import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import { CustomThemeProvider } from "./context/ThemeContext";

function App(){
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </CustomThemeProvider>
  )
}
export default App;