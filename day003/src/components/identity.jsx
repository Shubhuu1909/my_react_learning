import "./IdCard.css";

function IdCard() {
  return (
    <div className="id-card">
      <div className="card-header">
        <h2>ABC Company</h2>
      </div>

      <img
        src="https://via.placeholder.com/120"
        alt="Profile"
        className="profile-img"
      />

      <div className="card-body">
        <h3>John Doe</h3>
        <p className="designation">Software Engineer</p>

        <div className="info">
          <p><strong>ID:</strong> EMP001</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Bangalore</p>
        </div>
      </div>

      <div className="card-footer">
        Valid Employee Card
      </div>
    </div>
  );
}

export default IdCard;