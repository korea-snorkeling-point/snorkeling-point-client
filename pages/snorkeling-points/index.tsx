import SnorkelingPointListUI from '@components/unit/snorkeling-point/snorkelingPointList.presenter';

export default function SnorkelingPointsPage() {
  const bestPoints = Array(5)
    .fill(0)
    .map(e => 'hello');

  return <SnorkelingPointListUI bestPoints={bestPoints} />;
}
