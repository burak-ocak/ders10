import { useState } from "react";
import C1 from "./C1";


function App(ozellikler){
    let [sayi, sayiGuncelle] = useState(0);

    console.log("App component'i render oldu!");

    let sayiArttir= ()=>{
        sayiGuncelle(onceki => onceki + 1);
    }

    return(
        <>
            <p>Merhaba, ben App1 {ozellikler.renk}</p>
            <p>Sayı: {sayi}  <button onClick={ sayiArttir }>Arttır</button> </p>
            <C1 isimler={ ["Ahmet", "Esra"] } />
        </>

    );

}

export default App;