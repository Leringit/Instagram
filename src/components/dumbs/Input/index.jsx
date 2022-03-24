import * as Styled from './styled';

function Input (props) {

    return (<Styled.Input placeholder={props.placeholder} value={props.value} onClick={props.onClick} />)

}

export default Input