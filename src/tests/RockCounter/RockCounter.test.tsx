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

    it("increases the count when the increase button is clicked", () => {
        // arrange
        render(<RockCounter />);

        const increaseButton = screen.getByText("Increase");

        // act
        fireEvent.click(increaseButton);

        // assert
        expect(screen.getByText("Rocks Picked: 1")).toBeInTheDocument();
        expect(screen.getByText("Not Done")).toBeInTheDocument();
    })

    it("decreases the count when the decrease button is clicked", () => {
        // arrange
        render(<RockCounter />);

        const increaseButton = screen.getByText("Increase");
        const decreaseButton = screen.getByText("Decrease");

        // need to figure out a way to get the count up from zero better;
        fireEvent.click(increaseButton);
        fireEvent.click(increaseButton);
        fireEvent.click(increaseButton);
        expect(screen.getByText("Rocks Picked: 3")).toBeInTheDocument();

        // act
        fireEvent.click(decreaseButton);

        // assert
        expect(screen.getByText("Rocks Picked: 2")).toBeInTheDocument();
    })
})