import C1 from "./C1";

function App(){

    function Selamla(){
        alert("Merhaba!");
    };
    
    return(
        <div>

            <C1 arttir={1} fn={Selamla}/>
            <C1 arttir={2} fn={Selamla}/>
            <C1 arttir={3} fn={Selamla}/>

        </div>
    )
}

export default App;