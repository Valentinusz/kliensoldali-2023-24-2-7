import clsx from "clsx";
import "./Hello5.module.css";

/**
 *
 * @param {{name: string, times: number}} props
 * @returns
 */
export default function Hello5({ name, times = 1 }) {
  return (
    <>
      {Array.from({ length: times }).map((_, index) => (
        <div key={index}>
          {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
        </div>
      ))}
      <p className={clsx({ orange: name === "React" })}>asdasds</p>
      <hr />
    </>
  );
}
