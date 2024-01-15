import React, {useState} from "react";
import styles from './SearchBar.module.css'

function SearchBar() {
    const [searchedSong, setSearchedSong] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        return setSearchedSong(newValue);
    }


    return (
        <div>
            <h1 className={styles.background} >This is the search Bar component</h1>
            <input  type="text" value={searchedSong} onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;