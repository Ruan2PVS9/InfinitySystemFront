import { Row, Button, Icon, Input, InputWrapper } from "./style";

export const Search = (props) => {
  
  return (
    <>
      <Row>
        <InputWrapper>
        <Input type="text" placeholder="O que você procura?"
        {...props}
        />
          <Button>
            <Icon src="/icons/Search.svg" />
          </Button>
        </InputWrapper>
      </Row>
    </>
  );
};