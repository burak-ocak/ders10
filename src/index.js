import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App renk="kirmizi" />
    
);



// Biz propları componentleri tanımladığımız yerlerde veririz. Üstteki örnekteki gibi.
// Componentler aynı zamanda veri saklayan yapılardır.
// 4 temel konu = UI, prop, statement, lojic(döngüler, koşullu yapılar vs)

// Veriler ikiye bölünür. 
// proplar componente dışarıdan gönderilen verilerdir.
// state'ler componentin kendi içinden gelen datalar

// lojik kısım ise komponent fonksiyonunun returnden önceki kısmıdır. Burada state'ler tanımlanır. koşullu yapılar, döngüler vb işlemler yürütülür.
// UI kullanıcının gördüğü arayüzdür diyebiliriz.

//Componentler prop ve state verilerinin güncellemesine karşı tepki verirler(yeniden çalıştırılırlar).
//Komponent fonksiyonu çalıştırıldığında özel olarak ayarlanmadıysa altında bulunan componentler de yeniden çalıştırılır.