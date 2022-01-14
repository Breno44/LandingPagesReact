import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { NavLinks } from "../../components/NavLinks";
import { TextComponent } from "../../components/TextComponent";
import * as Styled from "./styles";
import links from "../../components/NavLinks/mock";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello</Heading>
        <TextComponent>Teste TextComponent</TextComponent>
        <MenuLink newTab link="https://www.google.com.br">
          Menu Link
        </MenuLink>
        <NavLinks links={links} />
      </Styled.Wrapper>
    </div>
  );
}
