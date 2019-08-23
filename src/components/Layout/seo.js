import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, link, keywords, title, abstract, pageUrl, footerImage, changed, shortLink }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              {
                rel: `shortlink`,
                href: data.site.siteMetadata.siteUrl + shortLink
              },
              {
                rel: `canonical`,
                href: data.site.siteMetadata.siteUrl + pageUrl
              },
              {
                rel: `image_src`,
                href: data.site.siteMetadata.siteUrl + footerImage
              }
            ]}
            meta={[
              {
                name: `description`,
                content: abstract
              },
              {
                name: `abstract`,
                content: abstract
              },
              {
                name: `generator`,
                content: `Gatsby.js`
              },
              {
                name: `geo-region`,
                content: `US-MT`
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:url`,
                content: data.site.siteMetadata.siteUrl + pageUrl
              },
              {
                property: `og:image`,
                content: data.site.siteMetadata.siteUrl + footerImage
              },
              {
                property: `og:determiner`,
                content: `Montana Crime Victim Help`
              },
              {
                property: `og:site_name`,
                content: `Montana Crime Victim Help`
              },
              {
                property: `og:description`,
                content: abstract
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:local`,
                content: `en_US`
              },
              {
                property: `og:updated_time`,
                content: changed
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                property: `twitter:image`,
                content: data.site.siteMetadata.siteUrl + footerImage
              },
              {
                property: `twitter:url`,
                content: `http://mtcrimevictimhelp.org${pageUrl}`
              },
              {
                name: `twitter:description`,
                content: abstract
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)
              .concat(link)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  link: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  link: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
