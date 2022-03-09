import  React from 'react'
import Header from './components/header/header'
import styled from 'styled-components'

const App =()=>{
  return(
    <Container>
      <Header/>
    </Container>
  )
}
export default App;

const Container = styled.div`
width: 100%
`

