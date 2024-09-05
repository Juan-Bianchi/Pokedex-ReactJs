import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ChecksData } from "../types/ChecksData";

export function useGetFilterChecks() {
  const [checks, setChecks] = useState<ChecksData>();
  const [stillLoading, setStillLoading] = useState(false);
  const [errorMsgChecks, seterrorMsgChecks] = useState("");

  const CHECKS_QUERY = gql`
    query samplePokeAPIquery {
      pokemon_v2_type {
        name
        id
      }
      pokemon_v2_pokemoncolor {
        id
        name
      }
    }
  `;

  const { data, loading, error } = useQuery<ChecksData>(CHECKS_QUERY);

  useEffect(() => {
    if (loading) setStillLoading(loading);
    if (error) seterrorMsgChecks(error.message);

    data && setChecks(data);
  }, [loading, error, checks, data]);

  return {
    stillLoading,
    errorMsgChecks,
    checks,
  };
}
