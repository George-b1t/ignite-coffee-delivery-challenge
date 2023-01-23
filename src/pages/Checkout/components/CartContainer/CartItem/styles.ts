import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  width: 100%;

  display: flex;

  gap: 1.25rem;

  > img {
    width: 64px;
  }
`

const CoffeeInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

const CoffeeInfoMenu = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

const CoffeeValue = styled.div`
  p {
    font-weight: 700;
    font-size: 16px;

    color: #574F4D;
  }
`

const Count = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  gap: 8px;

  background: #E6E5E5;
  border-radius: 6px;

  img {
    width: 14px;

    cursor: pointer;

    transition: .1s ease;

    &:hover {
      transform: scale(1.1);
      filter: brightness(0.9);
    }
  }
`

const DeleteItem = styled(Count)`
  transition: .3s ease;

  cursor: pointer;

  padding-right: 10px;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-weight: 400;
    font-size: 12px;
  }
  
  img {
    &:hover {
      transform: none;
      filter: none;
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 1px;
  background: #E6E5E5;

  margin: 1.5rem 0;
`

export {
  Container,
  Content,
  CoffeeInfo,
  CoffeeInfoMenu,
  CoffeeValue,
  DeleteItem,
  Wrapper,
  Count
}
