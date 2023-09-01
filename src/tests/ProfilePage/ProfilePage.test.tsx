import React from "react";
import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfilePage } from "../../components/ProfilePage/ProfilePage";

jest.mock("@auth0/auth0-react");

describe("ProfilePage", () => {
    it("does not render profile information when user is not authenticated", () => {
        // arrange
        (useAuth0 as jest.Mock).mockReturnValueOnce( { user: null } );

        // act
        render(<ProfilePage />);

        const profileHeading = screen.queryByText("Profile Page");

        // assert
        expect(profileHeading).toBeNull();
    })

    it("renders the profile when user is authenticated", () => {
        // arrange
        (useAuth0 as jest.Mock).mockReturnValueOnce( { user: { email: "test@example.com", picture: "user-picture-url" } } );

        // act
        render(<ProfilePage />);

        const profileHeading = screen.queryByText("Profile Page");
        const userEmail = screen.queryByText("test@example.com");
        const userPicture = screen.queryByAltText("user icon consisting of first two letters of name");

        // assert
        expect(profileHeading).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
        expect(userPicture).toHaveAttribute("src", "user-picture-url");
        expect(userPicture).toBeInTheDocument();
    })
})