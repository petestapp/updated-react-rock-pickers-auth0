import React from "react";
import {render, fireEvent, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/Buttons/LoginButton";

jest.mock("@auth0/auth0-react");

describe("LoginButton", () => {
    it("calls loginWithRedirect when the button is clicked", () => {
        // arrange
        const loginWithRedirect = jest.fn();
        (useAuth0 as jest.Mock).mockReturnValueOnce( { loginWithRedirect } );

        // act
        render(<LoginButton />);

        const button = screen.getByText("Log In");

        fireEvent.click(button);

        // assert
        expect(loginWithRedirect).toHaveBeenCalled();
    })
})