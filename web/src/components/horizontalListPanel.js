import React from "react"
import { RowWrapper, MiniTitle } from "./aboutSection"
import BoxiconWrapper from "./boxiconWrapper"

const HorizontalListPanel = ({ title, items }) => (
  <RowWrapper>
    <div className="row">
      <div className="col-sm-2">
        <MiniTitle>{title}</MiniTitle>
      </div>
      <div className="col-sm-8 offset-sm-2">
        <div className="row">
          {items.map((t) => (
            <div className="col-sm-6">
              <h5>{t.title}</h5>
              <BoxiconWrapper icon={t.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </RowWrapper>
)

export default HorizontalListPanel
