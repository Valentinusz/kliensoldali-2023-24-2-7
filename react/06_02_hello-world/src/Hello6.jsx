// const obj = {name: "asdasda", times: 5}
//  obj.name
// obj.times
// const {name, times} = {name: "asdasda", times: 5}
// name
// times

/**
 *
 * @param {{name: string, times: number}} props
 * @returns
 */
export default function Hello6({ name, times = 1 }) {
  return (
    <>
      {Array.from({ length: times }).map((_, index) => (
        <div key={index}>
          {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
        </div>
      ))}
      <hr />
    </>
  );
}
