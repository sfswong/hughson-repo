import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ItemCard from "./itemCard";
import { getBlogUrl } from "../lib/helpers";

export const BlogsSection = ({ headline }) => {
  const posts = useStaticQuery(
    graphql`
      query PostsQuery {
        allSanityPost {
          nodes {
            title
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  src
                }
              }
            }
            _rawExcerpt
            publishedAt
          }
        }
      }
    `
  ).allSanityPost.nodes;
  return (
    <div className="container my-5">
      <h2>{headline}</h2>
      <div className="row">
        {posts.map((p) => (
          <ItemCard
            title={p.title}
            description={p._rawExcerpt[0].children[0].text}
            image={p.mainImage}
            path={getBlogUrl(p.publishedAt, p.slug.current)}
          />
        ))}
      </div>
    </div>
  );
};
