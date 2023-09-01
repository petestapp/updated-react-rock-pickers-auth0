import React from "react";
import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfilePage } from "../../components/ProfilePage/ProfilePage";

jest.mock("@auth0/auth0-react");

describe("ProfilePage", () => {
    it("does not render profile information when user is not authenticated", () => {
        // arrange
        (useAuth0 as jest.Mock).mockReturnValueOnce({ user: null });

        // act
       render(<ProfilePage />);

        // assert
        const profilePageText = screen.queryByText("Profile Page");
        expect(profilePageText).toBeNull();
    })
})