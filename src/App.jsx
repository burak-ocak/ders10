import C1 from "./C1";

console.log("Merhaba ben app");

const App = ()=>{

    function selamVer(){
        alert("Hey, ben App!");
    }

    return(
        <>
            <C1 deger={1} artis={1} fn={selamVer}/>
            <C1 deger={2} artis={2} fn={selamVer}/>
            <C1 deger={3} artis={3} fn={selamVer}/>
        </>
    )
};
export default App;