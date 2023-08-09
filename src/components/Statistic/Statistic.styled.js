import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding:20px;
`
export const Title = styled.h2`
  font-size: 24px;
  &:hover {
  }
`
export const Button = styled.button`
padding: 20px 40px;
background-color: #F0F8FF;
cursor: pointer;
font-size: 18px;
border-radius: 33px;
border:transparent;

transition:background-color 250ms linear, color 250ms linear;
  
&:hover {
    background-color: #778899;
    color: #FFFFFF
  }
`

export const Text = styled.p`
font-size: 16px;
`