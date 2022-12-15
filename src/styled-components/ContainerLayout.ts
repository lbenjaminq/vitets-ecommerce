import styled from 'styled-components'

interface CSSProperties {
  flexDirection?: 'row' | 'column';
}

export const ContainerLayout = styled.div`
max-width:1800px;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
min-height:calc(100vh - 80px);
flex-direction: ${(props: CSSProperties) => props.flexDirection ? props.flexDirection : "column"};
`