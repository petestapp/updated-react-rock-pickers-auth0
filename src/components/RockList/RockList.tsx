import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import jwtDecode, {JwtPayload} from "jwt-decode";

interface Rock {
    id: number,
    type: string
}

interface jwtClaims extends JwtPayload {
    permissions: string[];
}

export const RockList: React.FC = () => {
    const [rockListArray, setRockListArray] = useState<Rock[]>([]);

    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        // look up angular equivalent
        const fetchRocks = async () => {
            try {
                const token = await getAccessTokenSilently();
                console.log(token);
                const decodedToken = jwtDecode<jwtClaims>(token);
                console.log(decodedToken);
                const permissions = decodedToken.permissions;
                console.log(permissions);

                if (permissions.includes("adminlist")) {
                    const response = await axios.get<Rock[]>("http://localhost:6060/getAllRocks", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    setRockListArray(response.data);
                } else if (permissions.includes("userlist")) {
                    const response = await axios.get<Rock[]>("http://localhost:6060/getAllRocksForUser", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    setRockListArray(response.data);
                }
            } catch (error) {
                console.error("error getting all rocks", error);
            }
        };
        fetchRocks();
    }, [getAccessTokenSilently]);
    // empty??

    if (!user) {
        return null;
    }

    return (
        <div>
            <h2>List of Rocks</h2>
            <ul>
                {rockListArray.map((rock) => (
                    <li key={rock.id}>{rock.type}</li>
                ))}
            </ul>
        </div>
    )
}