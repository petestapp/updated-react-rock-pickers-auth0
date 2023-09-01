import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export const SignUpButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect( {
            authorizationParams: {
                screen_hint: "signup",
            }
        } );
    };

    return (
        <button onClick={handleSignUp}>
            Sign Up
        </button>
    )
}