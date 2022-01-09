import React from 'react'
import Head from 'next/head'

type seoProp={
    description?:string,
    author?:string,

    title?:string,
}

const SEO = ({
    description = 'startup product landing page',
    author = 'Richard',
    title = 'startup landing title',
  }:seoProp) => {
    const metaData = [
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
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
        <Head>
          <title>{title}</title>
          {metaData.map(({ name, content }, i) => (
            <meta key={i} name={name} content={content} />
          ))}
        </Head>
      );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
  };
  

export default SEO
