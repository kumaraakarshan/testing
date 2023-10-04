import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
test('render Hello World as a text', () => {

    //arrange
    render(<Greeting />);

    //act
    //..... nothing at the moment

    //assert
    const helloWorldElement = screen.getByText('Hello world');
    expect(helloWorldElement).toBeInTheDocument();


});

test(' renders good to see if the button was not clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
})

test(' renders if the button was clicked', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')

    userEvent.click(buttonElement)

    const outputElement = screen.getByText('changed', { exact: false });
    expect(outputElement).toBeInTheDocument();
})
test(' doesnt renders good to see you  if the button was clicked', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')

    userEvent.click(buttonElement)

    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
})
