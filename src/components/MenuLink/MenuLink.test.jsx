import { screen } from "@testing-library/react";
import { MenuLink } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });

  it("should render open in a new tab", () => {
    renderTheme(
      <MenuLink newTab link="https://www.google.com.br">
        Children
      </MenuLink>
    );
    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <MenuLink newTab link="https://www.google.com.br">
        Children
      </MenuLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
