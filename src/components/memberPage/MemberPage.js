import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MemberPage.css';

function MemberPage(props) {
    const location = useLocation();
    const [dob, setDob] = useState("");
    const { selectedMember } = location.state || {};

    function monthName(monthNumberStr) {
        switch (monthNumberStr) {
            case '01':
                return 'January';
            case '02':
                return 'February';
            case '03':
                return 'March';
            case '04':
                return 'April';
            case '05':
                return 'May';
            case '06':
                return 'June';
            case '07':
                return 'July';
            case '08':
                return 'August';
            case '09':
                return 'September';
            case '10':
                return 'October';
            case '11':
                return 'November';
            case '12':
                return 'December';
        }
    }

    useEffect(() => {
        if (selectedMember) {
            let dateValuesArr = selectedMember.dob.date.split('T')[0].split('-');
            setDob(`${monthName(dateValuesArr[1])} ${dateValuesArr[2]}, ${dateValuesArr[0]}`);
        }
    }, [])

    if (selectedMember) {
        return (
            <div class='member-page-wrap'>
                <Link to="/">Return to Members List</Link>
                <h1>Member Page</h1>
                <img src={selectedMember.picture.large} />
                <p>First Name: {selectedMember.name.first}</p>
                <p>Last Name: {selectedMember.name.last}</p>
                <p>Street: {selectedMember.location.street.number} {selectedMember.location.street.name}</p>
                <p>City: {selectedMember.location.city}</p>
                <p>State: {selectedMember.location.state}</p>
                <p>Postcode: {selectedMember.location.postcode}</p>
                <p>Email Address: {selectedMember.email}</p>
                <p>Date of Birth: {dob}</p>
                <p>Phone Number: {selectedMember.phone}</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>No Member Selected</h1>
                <p>Please return to the <Link to="/">Members List</Link> and select a member to view their information.</p>
            </div>
        );
    }
}

export default MemberPage;
