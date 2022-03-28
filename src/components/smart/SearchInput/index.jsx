import * as Styled from "./styled";

function SearchInput(props) {
  return (
    <Styled.SearchInput
      value={props.value}
      placeholder="Pesquisar"
      onChange={props.onChange}
    />
  );
}

export default SearchInput;
