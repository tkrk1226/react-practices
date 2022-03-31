import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {

    const [route, setRoute] = useState('');

    const handleHashChange = () => {
        console.log(window.location.hash.substring(1));
        setRoute(window.location.hash.substring(1));
        // console.log(window.location);
    } 

    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange)
        } 
    }, [])

    return (() => {
        switch(route){
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default : 
                return null;
        }
    })();

    // return ()(); ???
    
}