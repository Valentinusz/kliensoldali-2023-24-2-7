export default function Hello3() {
  let name;

  const element = <div></div>;

  return (
    <>
      {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
      <hr />
    </>
  );
}
