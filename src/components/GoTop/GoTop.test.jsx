import { screen } from "@testing-library/react";
import { GoTop } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<GoTop />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to top" })).toHaveAttribute(
      "href",
      "#"
    );
    expect(container).toMatchSnapshot();
  });
});
