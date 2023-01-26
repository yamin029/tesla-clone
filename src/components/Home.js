import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order online for touch less delivery'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                backgroundImage='model-s.jpg'
            ></Section>
            <Section
                title='Model Y'
                description='Order online for touch less delivery'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                backgroundImage='model-y.jpg'
            ></Section>
            <Section
                title='Model 3'
                description='Order online for touch less delivery'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                backgroundImage='model-3.jpg'
            ></Section>
            <Section
                title='Model X'
                description='Order online for touch less delivery'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                backgroundImage='model-x.jpg'
            ></Section>
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-Back Guarantee'
                leftButtonText='Order Now'
                rightButtonText='Learn More'
                backgroundImage='solar-panel.jpg'
            ></Section>
            <Section
                title='Solar For New Roofs'
                description='Solar roof costs less than a new roof'
                leftButtonText='Order Now'
                rightButtonText='Learn More'
                backgroundImage='solar-roof.jpg'
            ></Section>
            <Section
                title='Accessories'
                description='Solar roof costs less than a new roof'
                leftButtonText='Shop Now'
                backgroundImage='accessories.jpg'
            ></Section>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`