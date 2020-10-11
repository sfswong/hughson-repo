import React from "react";
import styled from "styled-components";
import { MiniTitle } from "./aboutSection";
import { useStaticQuery, graphql } from "gatsby";
import BoxiconWrapper from "./boxiconWrapper";

const SkillsPanel = ({ skills }) => {
  return (
    <FloatingPanel className="clearfix">
      <MiniTitle>Skills</MiniTitle>
      <SkillSet>
        {skills.map((s) => (
          <div>
            <BoxiconWrapper icon={s.icon} />
            <p>{s.title}</p>
          </div>
        ))}
      </SkillSet>
    </FloatingPanel>
  );
};

const FloatingPanel = styled.div`
  position: relative;
  box-shadow: 30px 40px 40px rgba(34, 69, 192, 0.1);
  border-radius: 0px 30px 0px 0px;
  padding: 2.5rem 2.5rem;
  background-color: white;
  color: #0b217b; /* TODO FIX TO VAR */
  float: left; /* TODO there is probably a better way */
  width: 100%;
  margin-top: 3rem;
`;

const SkillSet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default SkillsPanel;
