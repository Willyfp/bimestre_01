import React, { useEffect, useState } from "react";
import { ListItem } from "../ListItem";

export const List = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
      <h1>Lista de repositórios</h1>

      {repos?.map((item) => (
        <ListItem {...item} />
      ))}
    </div>
  );
};
