
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import FullstackDeveloper from './FullstackDeveloper.jsx'
import DataScience from './DataScience.jsx'
import CyberSecurity from './CyberSecurity.jsx'
import CareerStatus from './Career.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route exact path = "/" element={<App />} />
  <Route  path = "/FullStack/" element={<FullstackDeveloper/>} />
  <Route  path = "/DataScience/" element={<DataScience/>} />
   <Route  path = "/CyberSecurity/" element={<CyberSecurity/>} />
   <Route  path = "/Career/" element={<CareerStatus/>} />
    
  </Routes>
    
  </BrowserRouter>,
)
