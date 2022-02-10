import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render the Navbar", () => {
    const { container } = render(<Navbar toggle={() => {}} movieInfo={{}} visible />);
    expect(container).toMatchSnapshot();
  });
});
