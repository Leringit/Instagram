import Input from "../../dumbs/Input";

function SearchInput(props) {
  return <Input value={props.value} placeholder="Pesquisar" onChange={props.onChange} />;
}

export default SearchInput;
