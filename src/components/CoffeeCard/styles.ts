import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 256px;
  height: 310px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  background: #F3F2F2;
  border-radius: 6px 36px;

  > img {
    position: absolute;

    top: -25px;
  }
`

const TagsContainer = styled.div`
  display: flex;

  margin-top: 120px;

  gap: 4px;

  p {
    padding: 4px 8px;

    background: #F1E9C9;
    border-radius: 100px;

    font-weight: 700;
    font-size: 10px;

    color: #C47F17;
  }
`

const CoffeeName = styled.p`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;

  margin-top: 1rem;

  color: #403937;
`

const CoffeeDescription = styled.p`
  font-size: 14px;

  margin-top: 0.5rem;
  width: 216px;

  text-align: center;

  color: #8D8686;
`

const CoffeePurchaseContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 48px);

  bottom: 20px;
  left: 24px;
`

const CoffeeValue = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 4px;

  span {
    font-weight: 400;
    font-size: 14px;

    color: #574F4D;
  }

  p {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;

    line-height: 20px;

    color: #574F4D;
  }
`

const CoffeeCountCartContainer = styled.div`
  display: flex;
  
  gap: 8px;
`

const CoffeeCountContainer = styled.div`
  display: flex;

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

const CoffeeCartButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  background: #4B2995;
  border-radius: 6px;

  &:hover {
    transition: .1s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export {
  Container,
  TagsContainer,
  CoffeeName,
  CoffeeDescription,
  CoffeePurchaseContainer,
  CoffeeValue,
  CoffeeCountCartContainer,
  CoffeeCountContainer,
  CoffeeCartButton
}
