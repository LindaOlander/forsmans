import React from 'react';

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const Instagram = ({token}) => {

    return (
        <>
        <h2>Följ oss på Instagram</h2>
        <InstagramFeed token={token} counter="6"/>
        </>

    )
}

export default Instagram;