import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/>
      <Row rowID='2' title='Popular' fetchURL={requests.fetchPopular}/>
      <Row rowID='3' title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row rowID='4' title='Action Movies' fetchURL={requests.fetchActionMovies}/>
      <Row rowID='5' title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
      <Row rowID='6' title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
      <Row rowID='7' title='Airing Today' fetchURL={requests.fetchAiringToday}/>
    </>
  )
}

export default Home