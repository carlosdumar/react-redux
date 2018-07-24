import React, {Component} from 'react';
import MediaContainer from '../containers/media';

import './playlist.css'

function Playlist(props) {           
    return(
        <div className="Playlist">            
            {
                props.playlist.map((mediaId) => {
                    return <MediaContainer openModal={props.handleOpenModal} id={mediaId} {...mediaId} key={mediaId}/>
                })
            }
        </div>
    )
    
}

export default Playlist;