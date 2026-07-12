import "./ProfileCard.css";

function ProfileCard({name,role,age=22,about}) {
  return (
   <div className="card">
    <div className="card-header"></div>

  <div className="card-body">
    <img
      src="https://www.magnific.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_27507695.htm#fromView=keyword&page=1&position=1&uuid=ec57d423-5121-48ff-821b-16269471f75d&query=Profile"
      alt="profile"
      className="profile-img"
    />

    <h2 className="name">{name}</h2>
    <p className="role">{role}</p>

    <div className="info">
      <p><b>Age:</b> {age}</p>
      <p><b>Bio:</b> {about}</p>
    </div>

    <div className="company">
      TECH SOLUTIONS PVT LTD
    </div>
  </div>
</div>
  );
}

export default ProfileCard;