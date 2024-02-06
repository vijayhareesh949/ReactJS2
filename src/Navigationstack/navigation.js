import { BrowserRouter, Route, Routes } from "react-router-dom"
import SettingsScreen from "../Screens/postlogin/settings"
import HomeScreen from "../Screens/postlogin/home"
import ProductScreen from "../Screens/postlogin/products"
import AboutScreen from "../Screens/postloginscrens/about"
import invalidScreen from "../Screens/preloginscreens/invalidscrren"




 const Navigation =()=>{

    return(
        <>
        
        
        <BrowserRouter>
        <Routes>
        <Route path="/" Component={HomeScreen} />
<Route path="/settings" Component={SettingsScreen} />
<Route path="/product" Component={ProductScreen} />
<Route path="/about" Component={AboutScreen} />
<Route path="*" Component={invalidScreen} />




        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}

export default Navigation