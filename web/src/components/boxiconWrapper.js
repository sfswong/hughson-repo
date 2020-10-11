import React from "react";

import * as boxiconsLogos from "@styled-icons/boxicons-logos";
import * as boxiconsRegular from "@styled-icons/boxicons-regular";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";

const camelCase = (input) => {
  const str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const BoxiconWrapper = ({ icon }) => {
  const n = camelCase(icon || "question-mark");
  let comp = boxiconsRegular[n] || boxiconsSolid[n] || boxiconsLogos[n];
  if (!comp) {
    // icon doesn't exist yet
    comp = boxiconsRegular[camelCase("question-mark")];
  }
  return React.createElement(comp, { style: { width: "4rem" } });
};

export default BoxiconWrapper;
