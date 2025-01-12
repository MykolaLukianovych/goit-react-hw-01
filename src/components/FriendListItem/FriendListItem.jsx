import styles from "./FriendListItem.module.css"


const FriendListItem = ({ avatar, name, isOnline }) => {

    const statusStyle = {
        color: isOnline ? "green" : "red",
    }

    return (
        <div className={styles.friendsInfo}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={styles.friendsName}>{name}</p>
  <p style={statusStyle}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    ) 
}

export default FriendListItem;