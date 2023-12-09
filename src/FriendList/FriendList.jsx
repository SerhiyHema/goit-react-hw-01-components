import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {

    const resultFriends = friends.map(({id, avatar, name, isOnline}) =>  (
         <ul className="friend-list" key={id}>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
         </ul>
    ))
    
    return (
        <section className="friends">
            {resultFriends}
        </section>)
}

export default FriendList;