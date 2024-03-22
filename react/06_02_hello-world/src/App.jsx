import Hello1 from "./Hello1";
import Hello2 from "./Hello2";
import Hello3 from "./Hello3";
import Hello4 from "./Hello4";
import Hello4b from "./Hello4b";
import Hello5 from "./Hello5";
import Hello6 from "./Hello6";
import Hello7 from "./Hello7";

export default function App() {
  return (
    <>
      <Hello1 />
      <Hello2 />
      <Hello3 />
      <Hello4 />
      <Hello4b />
      <Hello6 name="Bálint" times={5} />
      <Hello6 times={3} />
      <Hello6 />
      <Hello7 name="Bálint">
        <p>A small message for you!</p>
      </Hello7>
      <Hello5 />
      <Hello5 name="React" />
    </>
  );
}
