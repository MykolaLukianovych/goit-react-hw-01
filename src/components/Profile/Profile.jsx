import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.profileCard}>
  <div className={styles.topSideCard}>
    <img className={styles.ProfileImage}
      src={image}
      alt="User avatar"
    />
    <p className={styles.UserName}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={styles.statsList}>
    <li>
      <span>Followers</span>
      <span className={styles.boldStats}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={styles.boldStats}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={styles.boldStats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;