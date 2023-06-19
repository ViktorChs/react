import { useState } from 'react'

export function TwitterFollowCard ({userName , name , isFollow, children}){
const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tm-followCard-button isfollowing'
    : 'tm-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tm-followCard'>
            <header className='tm-followCard-header'>
                <img
                className='tm-followCard-avatar'
                alt="El avatar de midudev"
                src={`https://unavatar.io/${userName}`}/>
                <div className='tm-followCard-info'>
                <strong>{children}</strong>
                <span className='tm-followcar-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tm-followCard-text'>{text}</span>
                    <span className='tm-followCard-stopFollow '>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}