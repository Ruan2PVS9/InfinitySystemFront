import { Row, Button, Icon, Input, InputWrapper } from "./style";

export const Search = () => {
  return (
    <>
      <Row>
        <InputWrapper>
        <Input type="text" placeholder="O que você procura?"/>
          <Button>
            <Icon src="/icons/Search.svg" />
          </Button>
        </InputWrapper>
      </Row>
    </>
  );
};