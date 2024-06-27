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

  it.skip("Quantity input's value is '10'", () => {
    render(
      <InputQuantity
        quantity={10}
        onChangeHandler={() => {}}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );

    const input = screen.getByRole("spinbutton");
    expect(input.value).toBe("10");
  });

  it.skip("The typing into input fires the onChangeHandler", async () => {
    const user = userEvent.setup();
    const onChangeHandler = vi.fn();
    let quantity = 3;

    render(
      <InputQuantity
        quantity={quantity}
        onChangeHandler={onChangeHandler}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );

    const input = screen.getByRole("spinbutton");
    await user.type(input, "4");

    expect(onChangeHandler).toBeCalled();
  });

  it.skip("Clicking the incrementButton will increase the quality input's value by 1, initial value is '3", async () => {
    const user = userEvent.setup();

    const ParentComponent = vi.fn(() => {
      // Is it bad practice to define state in unit tests?
      const [quantity, setQuantity] = useState(3);
      return (
        <div>
          <InputQuantity
            quantity={quantity}
            onChangeHandler={() => {}}
            incrementHandler={() =>
              setQuantity((prevQuantity) => prevQuantity + 1)
            }
            decrementHandler={() => {}}
          />
        </div>
      );
    });

    render(<ParentComponent />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    const input = screen.getByRole("spinbutton");
    await user.click(incrementButton);

    expect(input.value).toBe("4");
  });
});
