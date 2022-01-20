import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);
    expect(
      screen.getByRole("heading", { name: "Hello World" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Hello World" })).toHaveAttribute(
      "href",
      "#target"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="image.jpg" />
    );
    expect(container).toMatchSnapshot();
  });
});
