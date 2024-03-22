// const obj = {name: "asdasda", times: 5}
//  obj.name
// obj.times
// const {name, times} = {name: "asdasda", times: 5}
// name
// times

/**
 *
 * @param {{name: string, times: number, children: React.JSX}} props
 * @returns
 */
export default function Hello7({ name, times = 1, children }) {
  console.log(typeof children);

  return (
    <>
      {Array.from({ length: times }).map((_, index) => (
        <div key={index}>
          {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
        </div>
      ))}
      {children}
      <hr />
    </>
  );
}
