import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"



const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendsList}>
        {friends.map(({ id, avatar, name, isOnline}) => (
            <li key={id + name} className={styles.friendsCard}>
		<FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
	</li>
        ))}
    </ul>
    )
    
}

export default FriendList;
