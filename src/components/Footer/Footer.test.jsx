import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer html={"<h1>Ola</h1>"} />);
    expect(screen.getByRole("heading", { name: "Ola" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
