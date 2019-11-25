import React from "react";
import { ulStyle1, ulStyle2, ulStyle3 } from "./ConstStyle";
export const List = () => {
  return (
    <div>
      <ul style={ulStyle1}>
        <li>U</li>
        <li>S</li>
        <li>A</li>
      </ul>
      <ul style={ulStyle2}>
        <li>C</li>
        <li>I</li>
        <li>T</li>
        <li>Y</li>
      </ul>
      <ul style={ulStyle3}>
        <li>W</li>
        <li>E</li>
        <li>A</li>
        <li>T</li>
        <li>H</li>
        <li>E</li>
        <li>R</li>
      </ul>
    </div>
  );
};
