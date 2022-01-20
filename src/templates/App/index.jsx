import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { NavLinks } from "../../components/NavLinks";
import { TextComponent } from "../../components/TextComponent";
import * as Styled from "./styles";
import links from "../../components/NavLinks/mock";
import { Menu } from "../../components/Menu";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Menu
          links={links}
          logoData={{ text: "teste", srcImg: "#target", link: "" }}
        />
      </Styled.Wrapper>
    </div>
  );
}
