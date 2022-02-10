import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";
import MovieGrid from "./MovieGrid";

describe("MovieCard", () => {
  it("should render the MovieCard", () => {
    const { container } = render(<MovieCard toggle={() => {}} movieInfo={{}} visible />);
    expect(container).toMatchSnapshot();
  });
});

describe("MovieGrid", () => {
  it("should render the MovieGrid", () => {
    const { container } = render(<MovieGrid movieList={[]} movieInfo={{}} visible />);
    expect(container).toMatchSnapshot();
  });
});
