import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RockCounter } from "../../components/RockCounter/RockCounter";

describe("RockCounter", () => {
    it("renders RockCounter component", () => {
        // arrange and act
        render(<RockCounter />);

        const rocksPicked = screen.getByText("Rocks Picked: 0");
        const increaseButton = screen.getByText("Increase");
        const decreaseButton = screen.getByText("Decrease");
        const resetButton = screen.getByText("Reset");

        // assert
        expect(rocksPicked).toBeInTheDocument();
        expect(increaseButton).toBeInTheDocument();
        expect(decreaseButton).toBeInTheDocument();
        expect(resetButton).toBeInTheDocument();
    })
})