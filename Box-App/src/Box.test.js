import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("successfully renders", () => {
    render(<Box />);
});

it("matches the snapshot", () => {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})