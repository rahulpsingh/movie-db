import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  it("should render a modal", () => {
    const { container } = render(<Modal toggle={() => {}} movieInfo={{}} visible />);
    expect(container).toMatchSnapshot();
  });
});
