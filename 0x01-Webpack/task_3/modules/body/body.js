import $ from "jquery";
import _ from "lodash";

import "./body.css";

$("body").append(
  "<p>Dashboard data for the students</p>",
  "<button><p>Click here to get started<p></button>",
  '<p id="count"></p>'
);

let count = 0;

function updateCounter() {
  count += 1;
  $("#count").text(`${count.toString()} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
