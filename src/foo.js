import * as d3 from "d3";

export default function() {
  return d3.select("body").append("div").text(42); 
};
