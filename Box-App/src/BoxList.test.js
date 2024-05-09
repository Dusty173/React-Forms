import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function testBox(boxList, height = 5, width = 5, backgroundColor = "red"){
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    
    fireEvent.change(heightInput, { target: { value: height } });  
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
    
    const button = boxList.getByText("Add a new box");
    
    fireEvent.click(button);
}

it("successfully renders", () => {
    render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", () => {
    const boxList = render(<BoxList />);
  
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
  
    testBox(boxList);

    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 5em;
      height: 5em;
      background-color: red;
    `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

});