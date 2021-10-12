import React, { useContext } from "react";
import { PessoaContext } from "./context";

const OtherComp = () => {
  const pessoas = useContext(PessoaContext);

  return (
    <div>
      {pessoas.map((e) => (
        <li>{e.nome}</li>
      ))}
    </div>
  );
};

export default OtherComp;
