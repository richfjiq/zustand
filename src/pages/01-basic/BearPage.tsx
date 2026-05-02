import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { BlackBears } from '../../components/bears/black-bears';
import { PandaBears } from '../../components/bears/panda-bears';
import { PolarBears } from '../../components/bears/polar-bears';
import { useBearStore } from '../../stores';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearsDisplay />
      </div>
    </>
  );
};

const BearsDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button className="mt-4" onClick={doNothing}>
        Do Nothing
      </button>
      <button className="mt-4" onClick={addBear}>
        Add Bear
      </button>
      <button className="mt-4" onClick={clearBears}>
        Clear Bears
      </button>
      <pre className="mt-4">{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};

export default BearsDisplay;
