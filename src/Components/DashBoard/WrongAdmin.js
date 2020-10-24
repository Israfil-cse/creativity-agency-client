import React, { useContext } from 'react';
import { UserContext } from '../../App';

const WrongAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <div className="text-center">
            <h3><span className="text-danger">we are extremely sorry</span> {loggedInUser.name} <br />
                if you want to access admin panel, please give me verified email
            </h3>
            </div>
        </div>
    );
};

export default WrongAdmin;