import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Modal from "../components/Modal";

/* (ノಠ益ಠ)ノ彡┻━┻
 * Dialog element not supported in testing-library
 * https://github.com/jsdom/jsdom/issues/3294
 */
describe.skip("Modal component", () => {
  const initialEntries = [
    { pathname: "/", state: { previousLocation: "/shop" } },
  ];

  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it("Modal component matches snapshot", async () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Modal />
      </MemoryRouter>
    );

    const dialog = screen.getByRole("dialog", { hidden: true });
    console.log("dialog.open", dialog.open);
    await dialog.showModal();
    console.log("dialog.open", dialog.open);
  });
});
