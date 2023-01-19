import {
  Container,
  Dashboard,
  Feature,
  StoreFeatures,
  StoreFeaturesContainer,
  StoreInformation,
  StoreInformationSubtitle,
  StoreInformationTitle
} from "./styles"

import coffeeDashboard from "../../assets/dashboard/CoffeeDashboard.png"

import cartFeature from "../../assets/dashboard/CartFeature.svg"
import timeFeature from "../../assets/dashboard/TimeFeature.svg"
import boxFeature from "../../assets/dashboard/BoxFeature.svg"
import coffeeFeature from "../../assets/dashboard/CoffeeFeature.svg"

function Home() {
  return (
    <Container>
      <Dashboard>
        <StoreInformation>
          <StoreInformationTitle>
            Encontre o café perfeito para qualquer hora do dia
          </StoreInformationTitle>
          <StoreInformationSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </StoreInformationSubtitle>

          <StoreFeaturesContainer>
            <StoreFeatures>
              <Feature>
                <img src={cartFeature} alt="Cart" />
                <p>Compra simples e segura</p>
              </Feature>
              <Feature>
                <img src={timeFeature} alt="Time" />
                <p>Entrega rápida e rastreada</p>
              </Feature>
            </StoreFeatures>
            <StoreFeatures>
              <Feature>
                <img src={boxFeature} alt="Box" />
                <p>Embalagem mantém o café intacto</p>
              </Feature>
              <Feature>
                <img src={coffeeFeature} alt="Coffee" />
                <p>O café chega fresquinho até você</p>
              </Feature>
            </StoreFeatures>
          </StoreFeaturesContainer>
        </StoreInformation>

        <img src={coffeeDashboard} alt="Coffee" />
      </Dashboard>
    </Container>
  )
}

export { Home }
