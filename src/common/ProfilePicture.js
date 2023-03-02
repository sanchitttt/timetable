import React from 'react'

function ProfilePicture({ src = 'https://i.ibb.co/CKQcxxr/img.jpg' }) {
    return (
        <img
            src={src}
            alt='profilePicture'
            className='rounded-full'
            width='32px'
            height='32px'
        />
    )
}

export default ProfilePicture