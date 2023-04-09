import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const GroupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoxCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 300px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  margin-left: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  margin-right: 1rem;
`;

const Button = styled.button<{ active: boolean }>`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  background-color: ${(props) =>
    props.active ? "var(--color-primary)" : "var(--color-secondary)"};
  color: ${(props) => (props.active ? "white" : "var(--color-text)")};
  &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
    color: white;
  }
`;

const Title2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Attention = styled.span`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Formule = styled.span`
  color: #d3d66b;
  font-weight: bold;
`;

const BlueText = styled.span`
  color: #2f80ed;
  font-weight: bold;
`;

const RedText = styled.span`
  color: red;
  font-weight: bold;
`;

export default function Home() {
  const galeRec = "Entrada Perdida x Payout";
  const GaleWLuc = "(Entrada Perdida x Payout) + Entrada";
  const lossRec = "Mão perdida x Payout";
  const lossWLuc = "(Mão perdida x Payout) + Entrada";

  const [banca, setBanca] = useState<number>(50);
  const [handSelected, setHandSelected] = useState<string>("comum");
  const [meta, setMeta] = useState<number>(10);

  const showInformation = () => {
    const metaNumber = banca * (meta / 100);
    const stopWin = banca * ((meta * 2) / 100);
    const stopLoss = banca * 0.4;

    if (handSelected === "comum") {
      const entrada = banca * 0.02;
      const entradaLeve = entrada / 2;

      return (
        <BoxCard>
          <Title2>Mão comum</Title2>
          <p>
            Entrada = <BlueText>${entrada.toFixed(2)}</BlueText>
          </p>
          <p>
            Entrada Leve = <BlueText>${entradaLeve.toFixed(2)}</BlueText>
          </p>
          <p>
            Meta = <BlueText>${metaNumber.toFixed(2)}</BlueText>
          </p>
          <p>
            StopWin = <BlueText>${stopWin.toFixed(2)}</BlueText>
          </p>
          <p>
            StopLoss = <BlueText>${stopLoss.toFixed(2)}</BlueText>
          </p>
        </BoxCard>
      );
    } else if (handSelected === "alavancada") {
      const entrada = banca * 0.1;
      const entradaLeve = entrada / 2;

      return (
        <BoxCard>
          <Title2>Mão alavancada</Title2>
          <p>
            Entrada = <BlueText>${entrada.toFixed(2)}</BlueText>
          </p>
          <p>
            Entrada Leve = <BlueText>${entradaLeve.toFixed(2)}</BlueText>
          </p>
          <p>
            Meta = <BlueText>${metaNumber.toFixed(2)}</BlueText>
          </p>
          <p>
            StopWin = <BlueText>${stopWin.toFixed(2)}</BlueText>
          </p>
          <p>
            StopLoss = <BlueText>${stopLoss.toFixed(2)}</BlueText>
          </p>
        </BoxCard>
      );
    }
  };

  return (
    <Container>
      <Title>Gerenciamento de Banca</Title>
      <Subtitle>
        Utilize Mão comum para sinais do dia e Mão alavancada para lives de
        noite
      </Subtitle>
      <Box>
        <h2>Banca:</h2>
        <Input
          value={banca}
          onChange={(e) => setBanca(Number(e.target.value))}
          type="number"
        />
        <h2>Meta</h2>
        <Input
          min="1"
          max="100"
          value={meta}
          onChange={(e) => setMeta(Number(e.target.value))}
          type="number"
        />
      </Box>
      <Box>
        <Button
          active={handSelected === "comum"}
          onClick={() => setHandSelected("comum")}
        >
          Mão comum
        </Button>
        <Button
          active={handSelected === "alavancada"}
          onClick={() => setHandSelected("alavancada")}
        >
          Mão Alavancada
        </Button>
      </Box>
      <GroupRow>
        {showInformation()}
        <BoxCard>
          <div>
            <h2>Gales</h2>
            <p>
              Gale de recuperação = <Formule>{galeRec}</Formule>
            </p>
            <p>
              Gale com lucro = <Formule>{GaleWLuc}</Formule>
            </p>
          </div>
        </BoxCard>
        <BoxCard>
          <div>
            <h2>No caso de Loss</h2>
            <p>
              Loss de recuperação = <Formule>{lossRec}</Formule>
            </p>
            <p>
              Loss com lucro = <Formule>{lossWLuc}</Formule>
            </p>
          </div>
        </BoxCard>
      </GroupRow>

      <br />

      <Attention>ATENÇÃO</Attention>
      <p>
        <RedText>NÃO</RedText> entrar em Sinal com menos de{" "}
        <BlueText>60% de PAYOUT</BlueText>
      </p>
      <p>
        <RedText>NÃO</RedText> fazer Gale com sinal com menos de{" "}
        <BlueText>75% de PAYOUT</BlueText>
      </p>
    </Container>
  );
}
