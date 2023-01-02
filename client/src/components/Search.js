import React from "react";



function Search(){
        const [sumName, setName] = React.useState('');
      
        // React.useEffect(() => {
        // //   fetch("/api")
        // //     .then((res) => res.json())
        // //     .then((data) => setData(data.message));
        // }, []);
        const handleSubmit = event => {
            console.log('handleSubmit ran');
            event.preventDefault(); // 👈️ prevent page refresh
        
            // 👇️ access input values here
            console.log('sum name 👉️', sumName)
            // fetch('/summonersearch', setName)
            // .then(name => name.json())
            // .then(info => console.log(info))
            
           

            setName('');
        }
    return(
        <form onSubmit={handleSubmit}>
            <input type = 'text'
                id = 'searchbar' 
                name = 'searchbar' 
                placeholder="Summoner Name"
                onChange={event => setName(event.target.value)}
                value={sumName} 
            />
        </form>
    )
}
export default Search