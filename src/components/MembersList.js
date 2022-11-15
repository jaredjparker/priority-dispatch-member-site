import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MembersList.css';

function MembersList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?seed=ba869649dd7f232a&results=150")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMembers(result.results);
          setFilteredMembers(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function handleChange(event) {
    setSearchText(event.target.value);
    let lowerCaseSearch = event.target.value.toLowerCase();
    let filteredMembers = members.filter(item => item.name.first.toLowerCase().includes(lowerCaseSearch) || item.name.last.toLowerCase().includes(lowerCaseSearch));
    setFilteredMembers(filteredMembers);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="member">
        <h1>Members List</h1>
        <input type="text" placeholder="Search Names" value={searchText} onChange={handleChange} />
        <div className="member-listing-wrap">
          {filteredMembers.map((member, index) => (
            <Link
              key={`${member.id.value}-${index}`}
              to="/profile"
              state={{ selectedMember: member }}
            >
              <div className="member-listing">
                <img alt={`Image of Member ${member.name.first} ${member.name.last}`} src={member.picture.thumbnail} />
                <p>{member.name.first}  {member.name.last}</p>
                <p>Age: {member.dob.age}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default MembersList;
