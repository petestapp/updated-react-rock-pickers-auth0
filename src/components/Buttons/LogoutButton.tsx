import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout( {
            logoutParams: {
                logoutParams: {
                    returnTo: "http://localhost:3000/"
                }
            }
        } );
    }

    return (
        <button onClick={handleLogout}>
            Log Out
        </button>
    )
}