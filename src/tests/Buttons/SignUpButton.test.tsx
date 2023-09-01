import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { SignUpButton } from "../../components/Buttons/SignUpButton";

jest.mock("@auth0/auth0-react");

describe("SignUpButton", () => {
    it("calls loginWithRedirect with authorizationParams when the button is clicked", () => {
        // arrange
        const loginWithRedirect = jest.fn();
        (useAuth0 as jest.Mock).mockReturnValueOnce( { loginWithRedirect } );

        // act
        render(<SignUpButton />);

        const button = screen.getByText("Sign Up");

        fireEvent.click(button);

        // assert
        expect(loginWithRedirect).toHaveBeenCalledWith({
            authorizationParams: {
                screen_hint: "signup",
            }
        })
    })
})