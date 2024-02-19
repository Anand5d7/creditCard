// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  height: 60vh;
  width: 30vw;
  padding: 30px;
  background-size: cover;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin: 0px;
`
export const HrLine = styled.hr`
  border: 1px solid #ffd773;
  width: 30%;
  margin-bottom: 50px;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 250px;
  padding: 20px;
  width: 350px;
  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`
export const NumberPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  line-height: 1.5;
  margin: 0px;
  padding-top: 60px;
  padding-bottom: 30px;
  font-weight: bold;
`
export const Para = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  line-height: 1.5;
  padding-bottom: 6px;
  font-weight: normal;
`
export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  line-height: 1.5;
  margin: 0px;
  font-size: 23px;
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c3cad9;
  height: 50vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  width: 30vw;
  background-size: cover;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 1px, 1px, 1px, 1px #d3d9e0;
  border-radius: 10px;
  height: 280px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`
export const Head = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
`
export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #c3cad9;
  height: 35px;
  width: 100%;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  border-radius: 3px;
  padding-left: 20px;
  padding-top: 5px;
  margin-bottom: 30px;
  padding-bottom: 5px;
`
