import Kisi from "./Kisi";
import "./app.css"

function App() {

    const kisiler = [
        { adSoyad: "Esra Yılmaz", foto: "https://randomuser.me/api/portraits/women/20.jpg", tel: "+90 535 456 87 98" },
        { adSoyad: "Ahmet Yılmaz", foto: "https://randomuser.me/api/portraits/men/30.jpg", tel: "+90 535 456 87 50" },
        { adSoyad: "Kaan Genç", foto: "https://randomuser.me/api/portraits/men/34.jpg", tel: "+90 535 456 87 20" }
    ]

    return (
        <section className="container">
            <h1 style={{ textAlign: "center" }}>Adres Defteri</h1>

            <div className="row">
                {
                    kisiler.map((eleman) => {
                        return (
                            <Kisi adSoyad={eleman.adSoyad} foto={eleman.foto} tel={eleman.tel} />
                        )
                    })
                }
            </div>

        </section>

    )
}

export default App;