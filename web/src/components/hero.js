import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Hero = ({ ctas, description, headline, mainImage, topline }) => {
  return (
    <HeroWrapper>
      {(topline || headline || ctas || description) && (
        <HeroContent large={true}>
          <div className="container-fluid">
            <div className="d-flex justify-between align-items-center">
              <div style={{ padding: "2rem" }}>
                {topline && <Topline>{topline}</Topline>}
                {headline && <Headline>{headline}</Headline>}
                {description && <BodyText>{description}</BodyText>}
                {ctas && (
                  <Actions>
                    {ctas.map((cta) => (
                      <StyledButton to={cta.link}>{cta.title}</StyledButton>
                    ))}
                  </Actions>
                )}
              </div>
              <div>
                {mainImage && (
                  <img
                    alt="Hughson"
                    src={mainImage.asset.url}
                    style={{ minWidth: "35%", maxWidth: "100%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </HeroContent>
      )}
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  top: 0;
  margin-bottom: 3rem;
  min-height: calc(6.5rem);
  transform-style: preserve-3d;
  );
`;

const HeroContent = styled.div`
  display: block;
  padding: 3rem 0;
  background-color: #f2f7fe;
  border-bottom-left-radius: 200px;

  ${(props) =>
    props.large &&
    css`
      padding: 8rem 0;
    `}
`;

export const Headline = styled.h2`
  font-size: 2.6em;
  line-height: 1.2;
  color: rgb(51, 76, 203);
  word-spacing: 1px;
  font-weight: 700;
  text-transform: none;
  margin-top: none;
`;

export const Topline = styled.p`
  font-size: 1.3rem;
  line-height: 1.2;
  color: rgb(51, 76, 203);
  word-spacing: 1px;
  font-weight: 600;
  text-transform: none;
  margin-bottom: 0;
`;

const BodyText = styled.p`
  color: #6e7c7c;
  line-height: 1.5rem;
`;

export const Actions = styled.div`
  padding-bottom: 0.5rem;
  > * {
    margin-right: 1rem;
  }
`;

export const HeroImage = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  position: relative;
  line-height: 2.25rem;
  font-size: 1rem;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  min-width: 8rem;
  border-radius: 3px;
  border: none;
  transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  color: white;
  background-color: rgb(51, 76, 203);
  border-bottom: 3px solid rgba(50, 50, 50, 50.5);
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 0 3px white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);

  &:after,
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px 3px 0 0;
    transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  &:after {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8);
  }

  &:before {
    background-color: rgb(51, 76, 203);
    opacity: 0;
  }

  &:hover {
    color: lightblue;
    text-decoration: none;
    &:before {
      opacity: 0.1;
    }
  }

  &:active {
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px white;
  }
`;
