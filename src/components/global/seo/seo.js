import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  const schemaOrgWebPage = 
  {
    "@context": "http://schema.org",
    "@type": "MarketingAgency",
    "@id": "https://www.dbrandmarketing.com",
    "name": "dBrandMarketing",
    "url" : "https://www.dbrandmarketing.com",
    "logo" : "https://www.dbrandmarketing.com/logo192.png",
    "contactPoint" : [{
      "@type" : "ContactPoint",
      "telephone" : "+91-988-022-2000",
      "contactType" : "customer service"
    }],
    "sameAs" : [
      "https://www.facebook.com/dbrandmarketing",
      "https://twitter.com/dbrandmarketing",
      "https://instagram.com/digital.brand.marketing/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#15 Aryan Grand Residency, Chandapura Anekal Road",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "562106",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.7517718,
      "longitude": 77.7050186
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  }


  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="fb:app_id" content="650543162203577" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>    

    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`