import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {SignUpButton} from "../Buttons/SignUpButton";
import {LoginButton} from "../Buttons/LoginButton";
import {LogoutButton} from "../Buttons/LogoutButton";

export const Navbar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    const isAuthenticatedBoolean: boolean = false;

    return (
        <div>
            {!isAuthenticated ? (
                <>
                    <SignUpButton />
                    <LoginButton />
                </>
            ) : (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    )
}