import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../components/Buttons/LogoutButton";

jest.mock("@auth0/auth0-react");

describe("LogoutButton", () => {
    it("calls logout when the button is clicked", () => {
        // arrange
        const logout = jest.fn();
        (useAuth0 as jest.Mock).mockReturnValueOnce( { logout } );

        // act
        render(<LogoutButton />);

        const button = screen.getByText("Log Out");

        fireEvent.click(button);

        // assert
        expect(logout).toHaveBeenCalled();
    })
})
