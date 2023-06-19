import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
    userName: 'midudev',
    name: 'Miguel Angel duran',
    isFollowing: false
},
{
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
},
{
    userName: 'lofiln',
    name: 'lofiln',
    isFollowing: false
}
]
export function App () {

    return (
        <section className='app'>
        <h1>Te gustaria seguir a</h1>
        {
        users.map(user => {
            const { userName, name, isFollowing } = user
            return (
                <TwitterFollowCard
                userName={userName}
                isFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
        })
        }
        </section>
    )
}