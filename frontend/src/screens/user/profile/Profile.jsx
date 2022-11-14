const Profile = (props) => {
    return (<>
        <div className="p-5 m-5 bd-s bdw-1"> 
        <img src = {props.currentUser.information.imageUrl}/>
        <div className = "notoBold fs-36">{props.currentUser.information.name}</div>
        프로필 페이지</div>
    </>)
}

export default Profile;