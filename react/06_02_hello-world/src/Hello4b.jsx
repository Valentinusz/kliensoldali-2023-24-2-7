export default function Hello4b() {
  const name = "Bálint";
  const times = 5;

  // [null, null, null, null, null]
  // map
  // <div key={index}>
  //  {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
  // </div>

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
