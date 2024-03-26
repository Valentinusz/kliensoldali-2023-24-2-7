import { useState } from "react";

function generateColor() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

export default function RandomColorDiv({ children }) {
  const [color, setColor] = useState(generateColor());

  return (
    <div onClick={() => setColor(generateColor())} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
