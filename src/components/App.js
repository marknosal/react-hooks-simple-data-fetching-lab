// create your App component here
import React, { useEffect, useState } from "react";

function App () {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setDog(data.message))
    }, [])

    return dog ? <img src={dog} alt='A Random Dog' /> : <p>Loading...</p>

}

export default App;
