import { FC } from 'react';
import { Header } from 'src/components/header/header';
import { Main } from 'src/components/main/main';

export const App: FC = () => {
  return(
    <>
      <Header/>
      <Main/>
    </>
  );
};