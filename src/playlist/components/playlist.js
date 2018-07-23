import React, {Component} from 'react';
import Media from './media';
import './playlist.css'

function Playlist(props) {  
    console.log(props.data)            
    return(
        <div className="Playlist">            
            {
                props.playlist.map((item) => {
                    return <Media openModal={props.handleOpenModal} {...item} key={item.id}/>
                })
            }
        </div>
    )
    
}

export default Playlist;