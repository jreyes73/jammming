import React from "react";

import styles from './Tracklist.module.css'

import Track from "../Track/Track";

const Tracklist = (props) => {
    return (
        <div className={styles.Tracklist}>
            {props.tracks.map((track) => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;