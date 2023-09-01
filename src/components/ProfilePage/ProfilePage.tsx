import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage: React.FC = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>{user.email}</h2>
            <img src={user.picture}  alt="user icon consisting of first two letters of name"/>
            <h2>ID token: {JSON.stringify(user, null, 2)}</h2>
        </div>
    )
}