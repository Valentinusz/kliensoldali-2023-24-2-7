export default function RandomColorDiv({ children }) {
  const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  return <div style={{ backgroundColor: color }}>{children}</div>;
}
