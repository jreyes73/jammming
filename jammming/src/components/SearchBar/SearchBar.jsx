import React, {useCallback, useState} from "react";
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange =useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);


    return (
        <div className={styles.searchBar} >
            <input placeholder="Enter a Song Title"  onChange={handleTermChange}/>
            <button className={styles.searchButton} onClick={search} >
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;