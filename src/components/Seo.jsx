import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo({ title, lang }) {
  const { site } = useStaticQuery(query);

  if (process.env.NODE_ENV === `development`) {
    if (!title) {
      throw new Error(`[Seo] Missing title`);
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ]}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`;
