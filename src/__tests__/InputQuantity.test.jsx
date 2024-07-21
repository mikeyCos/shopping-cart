import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputQuantity from "../components/InputQuantity";
import { useState } from "react";

describe("InputQuantity component", () => {
  it("InputQuantity component is rendered", () => {
    const { container } = render(
      <InputQuantity
        quantity={1}
        setQuantity={() => {}}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Quantity input's value is '10'", () => {
    render(
      <InputQuantity
        quantity={10}
        setQuantity={() => {}}
        onChangeHandler={() => {}}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("10");
  });

  // Simulates double click to highlight input value then entering a number
  it("Pasting into input fires the setQuantity", async () => {
    const user = userEvent.setup();
    const setQuantity = vi.fn((newQuantity) => {});
    let quantity = 3;

    render(
      <InputQuantity
        quantity={quantity}
        setQuantity={setQuantity}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    await user.dblClick(input);
    await user.paste("4");

    expect(setQuantity).toBeCalledWith("4");
  });

  it("Clicking the incrementButton will increase the quality input's value by 1, initial value is '3", async () => {
    const user = userEvent.setup();

    const ParentComponent = vi.fn(() => {
      // Is it bad practice to define state in unit tests?
      const [quantity, setQuantity] = useState(3);
      return (
        <div>
          <InputQuantity
            quantity={quantity}
            setQuantity={setQuantity}
            incrementHandler={() =>
              setQuantity((prevQuantity) => prevQuantity + 1)
            }
            decrementHandler={() => {}}
          />
        </div>
      );
    });

    render(<ParentComponent />);

    const incrementButton = screen.getByLabelText("increment quantity");
    const input = screen.getByRole("textbox");
    await user.click(incrementButton);

    expect(input.value).toBe("4");
  });
});
