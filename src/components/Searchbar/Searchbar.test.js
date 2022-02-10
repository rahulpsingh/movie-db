import { render } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar", () => {
  it("should render the Searchbar", () => {
    const { container } = render(<Searchbar toggle={() => {}} movieInfo={{}} visible />);
    expect(container).toMatchSnapshot();
  });
});
