import React from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function average(data) {
  return _.round(_.sum(data) / data.length);
}
export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </div>
  );
};
