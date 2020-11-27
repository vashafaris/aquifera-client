import styled from 'styled-components';

interface IProps {
  placeholder: string;
  width: string;
  margin: string;
}

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 2rem;
  padding: 0.8rem 2rem;
  font-size: 1.6rem;
  line-height: 140%;
  width: ${(props) => (props.width ? props.width : 'fit-content')};
`;

export default ({ placeholder, width, margin }: IProps) => {
  return <Input placeholder={placeholder} width={width} />;
};
