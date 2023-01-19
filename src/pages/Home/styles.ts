import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 100px 0;
`

const StoreInformation = styled.div`
  display: flex;
  flex-direction: column;

  width: 588px;
`

const StoreInformationTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 48px;

  line-height: 130%;

  margin-bottom: 16px;

  color: #272221;
`

const StoreInformationSubtitle = styled.p`
  font-weight: 400;
  font-size: 20px;

  color: #403937;
`

const StoreFeaturesContainer = styled.div`
  display: flex;
  justify-self: flex-end;

  margin-top: 67px;

  gap: 40px;
`

const StoreFeatures = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`

const Feature = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  p {
    font-weight: 400;
    font-size: 16px;

    color: #574F4D;
  }
`

export {
  Container,
  Dashboard,
  StoreInformation,
  StoreInformationTitle,
  StoreInformationSubtitle,
  StoreFeaturesContainer,
  StoreFeatures,
  Feature
}
