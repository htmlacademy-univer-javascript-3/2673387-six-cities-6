import MainPage from '../../pages/main-page/main-page.tsx';

type AppProps = {
  offerCount: number;
}

function App({ offerCount }: AppProps): JSX.Element {
  return (
    <MainPage offerCount={offerCount} />
  );
}

export default App;

