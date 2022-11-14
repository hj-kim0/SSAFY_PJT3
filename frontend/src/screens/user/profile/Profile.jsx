const Profile = (props) => {
    return (<>
        <div className= "p-5 m-5 bd-s bdw-1 box"> 
        <img className="profile"src = {props.data.currentUser.information.imageUrl}/>
        <div className= "notoBold fs-36">{props.data.currentUser.information.name}</div>
        프로필 페이지</div>
    </>)
}

export default Profile;