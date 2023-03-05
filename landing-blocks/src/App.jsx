import {useEffect, useState} from 'react'
import {getLinks} from "./services/links.js";
import {LinkList} from "./components/LinkList.jsx";
import './App.css'

function App() {
    const [links, setLinks] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('usingEffect');

        getLinks()
            .then((links) => {
                setLinks(links);
            })
            .catch((err) => {
                console.error(err);
                setError(true);
            })
    }, [])

    return (
        <main className="App">
            {links && <LinkList links={links} />}
        </main>
    )
}

export default App
