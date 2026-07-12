
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <ProfileCard
        name="Shubham"
        age={22+1}
        role="Frontend Developer"
        about="Works on ReactJS and UI Design."
      />

      <ProfileCard
        name="Surya"
        
        role="Backend Developer"
        about="Works on APIs and Database."
      />
    </>
  );
}

export default App;