import { Link } from "react-router-dom";

interface IAboutProps {
    
}
 
const AboutPage: React.FunctionComponent<IAboutProps> = () => {
    return ( <div>
        <h1>Hallo</h1>
        <p>Ini adalah halaman About</p>
        <Link to="/">Beralih Ke halaman Home!</Link>
        </div>
     );
}
 
export default AboutPage;