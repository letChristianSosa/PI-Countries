import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar';
import CountryInfo from './components/CountryInfo/CountryInfo';
import CreateActivity from './components/CreateActivity/CreateActivity';
import ContainerCountries from './components/ContainerCountries/ContainerCountries';


function App() {
    return (
    <>
        <NavBar/>    
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/countries" element={<ContainerCountries/>}/>
            <Route path="/addActivity" element={<CreateActivity/>}/>
            <Route path="/countries/info/:id" element={<CountryInfo/>}/>
        </Routes>
        <Footer />
    </>
        
    );
}

export default App; 
