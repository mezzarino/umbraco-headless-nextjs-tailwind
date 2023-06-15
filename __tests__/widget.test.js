import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Widget from '../components/widget';

describe("Widget component", () => {
    test("Confirm h2 in widget", () => {
        render(<Widget />);
    
        const titleElement = screen.getByText('Example shared component widget');
        expect(titleElement).toBeInTheDocument();
    });
  });