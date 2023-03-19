import { useState } from "react";

const C1 = (ozellikler)=>{

    const [sayi, sayiGuncelle] = useState(ozellikler.deger);

    function sayiArttir(){
        sayiGuncelle(onceki => onceki + ozellikler.artis)
    }

    console.log("hey");

    return(
        <p>Ben C1! Sayı: {sayi} 
        <button onClick={ sayiArttir }>Arttır</button> 
        <button onClick={ozellikler.fn}>Appteki Fonksiyon</button></p>
    )
};

export default C1;