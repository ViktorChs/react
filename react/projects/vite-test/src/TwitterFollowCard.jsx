export function TwitterFollowCard ({userName , name , isFollow}){
    return (
        <article className='tm-followCard'>
            <header className='tm-followCard-header'>
                <img
                className='tm-followCard-avatar'
                alt="El avatar de midudev"
                src={`https://unavatar.io/${userName}`}/>
                <div className='tm-followCard-info'>
                <strong>{name}</strong>
                <span className='tm-followcar-infoUserName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tm-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}