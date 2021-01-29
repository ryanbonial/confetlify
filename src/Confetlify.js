import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const netliColors = [
  "#007A70", // teal-800
  "#00AD9F", // teal-600
  "#005FB3", // blue-800
  "#BA42FF", //purple-600
];

const netliShape = (ctx) => {
  ctx.lineWidth = 1;
  var p = new Path2D(
    "M28.6 14.1l.7-4.8 3.6 3.6-3.7 1.6H29a1.7 1.7 0 0 0-.5-.4zm5.2-.3l4 4c.7.7 1.1 1.1 1.3 1.6v.2l-9.2-4h-.1l4-1.8zm5.2 7c-.2.4-.6.8-1.3 1.5l-4.3 4.3-5.7-1.1-.1-.1a1.7 1.7 0 0 0-.7-1.2V24l1-6.5.1-.2a1.7 1.7 0 0 0 1.2-.6h.1l9.7 4zm-6.7 6.9l-7.1 7.1 1.2-7.5v-.1a1.9 1.9 0 0 0 .8-.5l5.1 1zm-8.7 8.7l-.8.8-9-13V24l.1-.1.1-.1h.1l10 2v.1a1.8 1.8 0 0 0 1 1.2.2.2 0 0 0 0 .1l-1.5 9zM22 38c-.6.6-1 1-1.4 1a2 2 0 0 1-1.2 0c-.5 0-.9-.5-1.7-1.3l-9-9 2.4-3.6h.1a2.4 2.4 0 0 0 1.6-.1h.1l9 13zM7.9 28l-2.1-2.1 4-1.7h.1a3 3 0 0 0 .2.2L8 28zm-3-3l-2.6-2.6-1-1 8 1.6v.1L4.8 25zm-4-5a2 2 0 0 1 0-.5c.2-.5.6-.9 1.4-1.7l3.3-3.3a2175.5 2175.5 0 0 0 4.6 6.7s.1 0 0 0l-.3.6h-.1L.8 20zm5.6-6.4L11 9l3.3 1.4 2.3 1c.1 0 0 0 0 .1a2 2 0 0 0 .6 1.8v.1l-4.6 7.1h-.1a2.3 2.3 0 0 0-.6 0 3 3 0 0 0-.5 0l-4.9-7zM12 8l5.8-5.8C18.5 1.5 19 1 19.4.9a2 2 0 0 1 1.2 0c.5.2.9.6 1.7 1.4l1.2 1.2-4.1 6.4c0 .1-.1.1-.1 0a2.1 2.1 0 0 0-2 .5L11.8 8zm12.5-3.7l3.8 3.8-.9 5.7v.1a1.8 1.8 0 0 0-.6.3.1.1 0 0 1-.1 0L20.8 12l-.1-.1a2.2 2.2 0 0 0-.3-1l4-6.4zm-4 8.6l5.5 2.3h.1a.1.1 0 0 1 0 .1v.5h-.1l-12.1 5.2h-.1V21l4.5-7h.5a2 2 0 0 0 1.7-1zm-6.2 9.2L26.5 17l.2.1.1.1-1 6.5-.1.1a1.7 1.7 0 0 0-1.4.9h-.1l-9.8-2-.2-.5z"
  );
  ctx.stroke(p);
  ctx.fill(p);
}

const Confetlify = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      colors={netliColors}
      drawShape={netliShape}
    />
  );
};

export default Confetlify;
