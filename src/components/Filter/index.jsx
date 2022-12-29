import React, { useState } from "react";
import { playlist } from "../mocks/playlist";

export const Filter = () => {
  // filter
  const [busca, setBusca] = useState("");
  return (
    <div>
      {playlist.map((item) => (
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        ></input>
      ))}
    </div>
  );
};
