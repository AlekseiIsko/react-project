import React, {useCallback} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useLocation } from 'react-router-dom';

const SignUp = () => {
    const location = useLocation();

    const handleSubmit = useCallback(async e => {
        e.preventDefault();

        const {email, password} = e.target.elements;
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
        } catch(e) {
            alert(e.message);
        }
    }, []);

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" type="email" />
                <input name="password" placeholder="Password" type="password" />
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUp;