import "./Profile.css";

function Profile(props)
{
    return(
      <div className="profile-card">
        <h2>Student Profile</h2>
        <p> Name: {props.studentname }</p>
        <p>Course: {props.coursename}</p>
        <p>Intake Year: {props.year}</p>
      </div>

    );
}

export default Profile;