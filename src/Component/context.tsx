import React, { useState } from "react";
import OtherComp from "./othercomp";

interface Pessoa {
  nome: string;
  idade: number;
  numeroDeSuicidios: number;
}

const createPessoa = (): Pessoa => {
  return {
    nome: "jose",
    idade: 12,
    numeroDeSuicidios: 2,
  };
};

export const PessoaContext = React.createContext<Pessoa[]>([]);

const Comp = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  const addPessoas = () => {
    setPessoas([...pessoas, createPessoa()]);
  };

  return (
    <>
      <PessoaContext.Provider value={pessoas}>
        <button onClick={addPessoas}>Toggle</button>
        <OtherComp />
      </PessoaContext.Provider>
    </>
  );
};

export default Comp;
