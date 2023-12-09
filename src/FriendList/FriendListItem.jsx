const FriendListItem = ({avatar, name, isOnline}) => {
    return (
            <li className="item">
                {isOnline ? (<span className="status-on"></span>) : (<span className="status-off"></span>)}
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
    )
}

export default FriendListItem;