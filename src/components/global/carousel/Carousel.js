import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import './carousel.scss'

const CarouselComp = () => {
    const data = useStaticQuery(graphql`
        query {  
            allFile(filter: {relativeDirectory: {eq: "homeCarousel"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid (maxHeight: 350) {
                                ...GatsbyImageSharpFluid
                                ...GatsbyImageSharpFluidLimitPresentationSize
                            }
                        }
                    }
                }
            }
        }
  `)

    return (
        <Carousel>
            {data.allFile.edges.map( nodes => (
                <Carousel.Item>
                    <Img className='carouselItem' fluid={nodes.node.childImageSharp.fluid} alt="" /> 
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComp;