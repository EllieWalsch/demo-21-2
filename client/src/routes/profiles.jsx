import { useQuery } from "@apollo/client";
import { PROFILES } from "../graphql/type-defs";

export default function Profiles() {
  const { loading, error, data } = useQuery(PROFILES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.profiles.map(({ id, name, skills }) => (
    <ul key={id}>
      <li>
        {name} - {skills[0]}
      </li>
    </ul>
  ));
}
