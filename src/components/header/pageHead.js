import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content="dBrandMarketing - Seller Registration | For advertising on our digital and social media sites" />
            <meta property="og:url" content="https://www.dbrandmarketing.com/sellerReg" />
            <meta property="og:title" content="dBrandMarketing - Seller Registration" />
            <meta property="og:description" content="dBrandMarketing - Seller Registration | For advertising on our digital and social media sites" />
            <meta property="fb:app_id" content="650543162203577" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_IN" /> 
            <meta content='INDEX,FOLLOW' name='robots'></meta>                       
        </Helmet>
    )
}

export default Head
