import React from "react";
import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "../../components/Navbar/Navbar";

jest.mock("@auth0/auth0-react");

describe("Navbar", () => {
    it("renders SignUp and Login buttons when not authenticated", () => {
        // arrange
        (useAuth0 as jest.Mock).mockReturnValueOnce( { isAuthenticated: false } );

        // act
        render(<Navbar />);

        const signUpButton = screen.getByText("Sign Up");
        const loginButton = screen.getByText("Log In");

        // assert
        expect(signUpButton).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    })

    it("renders logOut button when authenticated", () => {
        // arrange
        (useAuth0 as jest.Mock).mockReturnValueOnce( { isAuthenticated: true } );

        // act
        render(<Navbar />);

        const logOutButton = screen.getByText("Log out");

        // assert
        expect(logOutButton).toBeInTheDocument();
    })
})