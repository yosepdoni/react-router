import { Link } from "react-router-dom";

interface IProfileProps {
    
}
 
const ProfilePage: React.FunctionComponent<IProfileProps> = () => {
    return ( 
        <div>
            <h1>Ini adalah halama profil <i>Yosep Doni Saputra</i></h1>
            <p>Terima kasih telah berkunjung</p>
            <Link to="/">Beralih Ke halaman Home!</Link>
        </div>
    );
}
 
export default ProfilePage;