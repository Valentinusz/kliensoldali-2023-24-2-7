export default function Hello4() {
  const name = "Bálint";
  const times = 5;

  const greetings = [];

  for (let index = 0; index < times; index++) {
    greetings.push(
      <div key={index}>
        {name ? <h1>Helló {name}!</h1> : "Nincs kit üdvözölni."}
      </div>
    );
  }

  console.log(greetings);

  return (
    <>
      {greetings}
      <hr />
    </>
  );
}
