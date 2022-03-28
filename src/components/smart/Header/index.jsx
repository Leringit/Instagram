import * as Styled from "./styled";
import Button from "../../dumbs/Button";
import logoSrc from "../../../assets/logo.png";
import SearchInput from "../SearchInput";

function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderImg src={logoSrc} />
      <SearchInput />
      <div>
        <Button>Entrar</Button>
        <Button>Cadastre-se</Button>
      </div>
    </Styled.Header>
  );
}

export default Header;
