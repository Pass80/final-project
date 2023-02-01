import './ProfilPage.css';
import NavBar from '../../Components/NavBar/NavBar';

const ProfilPage = () => {
    return (
        // Seite erstellt, damit die Navbar auch Wirkung zeigt =)
        <section className="profilPage">
            <div className="profilImg">
                {/* erstmal nur ein statisches Bild von unsplash genommen...  */}
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60"
                    alt="profil-bild"
                />
            </div>

            <NavBar />
        </section>
    );
};

export default ProfilPage;
