import Greeting from "./Greeting"
import { render, screen } from "@testing-library/react";
test('render Hello Worls as a text', () => {

    //arrange
    render(<Greeting />);

    //act
    //..... nothing at the moment

    //assert
    const helloWorldElement = screen.getByText('Hello world');
    expect(helloWorldElement).toBeInTheDocument();


})