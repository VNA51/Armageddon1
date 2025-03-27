import {Header} from "./Header";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe(" [components] Header", ()=>{
    beforeEach(()=>{
        render(<BrowserRouter><Header /></BrowserRouter>);
    })
   it ("should contains common header html element", ()=>{
       const header =screen.getByRole("heading");
       expect(header).toBeInTheDocument();
       expect(header).toHaveTextContent("ARMAGGEDON V")
    });

    it ("should contains links to asteroids and destroyment pages", ()=>{
        const links =screen.getAllByRole("link");
        expect(links[0]).toHaveAttribute("href", "/asteroids");
        expect(links[1]).toHaveAttribute("href", "/destroyment");
    });

    it('Should contains button, after click on it should hide button and display input', () => {
        const button = screen.getByText(' ');
        expect(button).toBeInTheDocument();
        expect(screen.queryByTestId('api_key_input')).not.toBeInTheDocument();

        fireEvent.click(button);
        waitFor(() => {
            expect(button).not.toBeInTheDocument();
            expect(screen.getByTestId('api_key_input')).toBeInTheDocument();
        });
    });
    })