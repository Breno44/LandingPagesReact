import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import * as Styled from "./styles";
import { mockBase } from "../Base/mock";

export function Home() {
  return <Base {...mockBase} />;
}
