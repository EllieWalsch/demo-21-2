import { useQuery } from "@apollo/client";
import { THOUGHTS } from "../graphql/type-defs";

export default function Thoughts() {
  const { loading, error, data } = useQuery(THOUGHTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.thoughts.map(({ id, thoughtText, thoughtAuthor }) => (
    <ul key={id}>
      <li>{thoughtText}</li>
      <li>{thoughtAuthor}</li>
    </ul>
  ));
}
