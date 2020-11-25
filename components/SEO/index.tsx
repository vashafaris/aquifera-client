import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, meta, keywords }) => {
  const description =
    'Organisasi kemasyarakatan berbasis teknologi dengan mengelola dana yang dititipkan oleh pihak donatur atas keinginannya untuk berkontribusi bagi masyarakat terhadap permasalahan air. | Aquifera';
  const author =
    'Organisasi kemasyarakatan berbasis teknologi untuk menyelesaikan permasalahan air | Aquifera';
  const metaList = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `google-site-verification`,
      content: ``,
    },
    {
      property: `og:title`,
      content:
        'Organisasi kemasyarakatan berbasis teknologi untuk menyelesaikan permasalahan air | Aquifera',
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `article`,
    },
    {
      property: `og:site_name`,
      content: `Aquifera`,
    },
    {
      property: `og:url`,
      content: 'https://aquifera-client.vercel.app/',
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      meta={metaList
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <title>{`Aquifera | ${title}`}</title>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

export default SEO;
