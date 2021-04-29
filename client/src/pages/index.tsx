import type { NextPage } from 'next'
import {Badge, Button} from 'react-bootstrap'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {RootState, useAppDispatch} from '../store/store';
import { useSelector } from 'react-redux';
import { incrementPlus} from "../actions/counters/counters";
import {ICounterState} from "../reducers/counter/counter";
import HeaderPage from "../layout/header/header";

const IndexPage: NextPage = () => {
    const state = useSelector<RootState, ICounterState>((state) => state.counter);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(incrementPlus(state?.data + 1))
    }
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HeaderPage/>
      <header className={styles.header}>

        <img src="/logo.svg" className={styles.logo} alt="logo" />
          <h1>
              Example heading <Badge variant="secondary">{state?.data}</Badge>
          </h1>
           <Button variant="primary"  onClick={handleClick}>
              Pluse
           </Button>
      </header>
    </>
  )
}

export default IndexPage
