import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyTable from './components/MyTable'

const data = [
  {
    name: 'Jose Maria',
    department: 'Marketing',
    salary: 15000,
    documents: ['Offer.pdf', 'Employement.pdf', 'Assignment.pdf', 'Others.pdf', 'Doc1', 'Doc2', 'wwwwwwww', 'sdfasdfasf'],
  },
  {
    name: 'Alex',
    department: 'Product Management',
    salary: 18000,
    documents: ['Offer.pdf', 'Employement.pdf', 'Assignment.pdf'],
  },
  {
    name: 'Christina',
    department: 'Operation',
    salary: 15000,
    documents: ['Offer.pdf', 'Employement.pdf', 'Assignment.pdf', 'Others.pdf'],
  },
];
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MyTable data={data}/>
    </div>
  )
}

export default Home
