import React from "react";
import { render, screen } from "@testing-library/react";
import {Auth0ContextInterface, useAuth0} from "@auth0/auth0-react";
import { Navbar } from "../../components/Navbar/Navbar";

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>

describe("Navbar", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            user: {
                name: 'Test User',
                email: 'test.user@email.com',
            },
            getAccessTokenSilently: jest.fn().mockResolvedValue('access_token'),
            getAccessTokenWithPopup: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithRedirect: jest.fn(),
            loginWithPopup: jest.fn(),
            logout: jest.fn(),
            isLoading: false,
            error: undefined,
        } as unknown as Auth0ContextInterface);
    });

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

        const logOutButton = screen.getByText("Log Out");

        // assert
        expect(logOutButton).toBeInTheDocument();
    })
})