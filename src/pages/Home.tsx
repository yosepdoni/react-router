import React from "react";
import { Link } from "react-router-dom";

interface IHomePageProps {
    
}
 
const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    return ( <div>
        <h1>Selamat Datang!</h1>
        <p>Ini adalah halaman Home</p>
        <Link to="/about">Ke Halaman About</Link><br />
        <Link to="/Profile">Ke Halaman Profil</Link>
        </div> 
        );
}
 
export default HomePage;