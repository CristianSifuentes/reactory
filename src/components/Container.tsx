import { Cell } from "./Cell";

export const CellColony = () => {
  return (
    <div>
      <h2>🔬 Simulated Cell Colony</h2>
      <Cell cellId={1} initialEnergy={5} cellType={""} cellContent={""} />
      <Cell cellId={2} initialEnergy={7} cellType={""} cellContent={""} />
      <Cell cellId={3} initialEnergy={10} cellType={""} cellContent={""} />
    </div>
  );
};