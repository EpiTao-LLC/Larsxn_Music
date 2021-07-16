import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// this code's borrowed from a Gatsby SEO component.  Refactored a bit.

const SEO = () => {

  const seo = {
    title: `Larsxn - New Music`,
    description: `Music by Larsxn - New Hip Hop, Pop and Alternative Rock. Music composition and collaboration. Vocals and instrumentals. Performance, mixing and recording.`,
    image: "/images/Larsxn_shades_cropped.jpeg",
    url: `https://www.larsxn.com/`,
  }

  return (
    <Helmet title={seo.title} >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/* Canonical tag for search engines */}

      <link rel="canonical" href="https://www.larsxn.com" />
      <meta name="" content="index,follow,max-image-preview:large" />

      <meta name="keywords" content="Larsxn, music, new artist, composer, producer, vocals, instrumentals, video, hip hop, pop, chill, spotify, apple music, soundcloud, hits, top, Lie. Away, Never Stop Me, Ungrateful, Changes"/>

      {/* Cross-origin isolation for Google Chrome */}

      <meta name="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta name="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta name="http-equiv='origin-trial'" content="An+i3qyt0eE84OMT2mgfWpQxPTcSgTh4TUv2p/k981X0BaZDxIPOOuamCTVq5UreDR6HVx06yWZFoIhKOTErZwcAAAB4eyJvcmlnaW4iOiJodHRwczovL3d3dy5sYXJzeG4uY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTYzOTUyNjM5OSwiaXNTdWJkb21haW4iOnRydWV9"

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

