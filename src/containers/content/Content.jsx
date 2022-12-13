import React from 'react'
import './content.css'


import { Cards } from '../../components'

const Content = () => {
  return (
    <div className="netflix__content">
      <Recomendations />
      <Tvshow />
      <Family />
      <Animations />
    </div>
  )
}

function Recomendations() {
  return (
    <div className='netflix__content-row'>
      <h1>Recommendations</h1>
      <div className="netflix__content-recomendations">
        <Cards img='https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' title='Lucifer' />
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg' title='Sandman' />
        <Cards img='https://s2.glbimg.com/m3Ust9QaabclGO0nLNGsGHfCmhQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/I/v/7UJmBDTW2g8dwuXnFUHg/1899.jpg' title='1899'/>
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/butcher-clean-rgb_8snc.jpg' title='The Boys'/>
        <Cards img='https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg' title='Dark'/>
        <Cards img='https://br.web.img3.acsta.net/pictures/18/09/28/09/34/1699413.jpg' title='Titans' />
        <Cards img='https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg' title='The Witcher' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' title='Manifest' />
        <Cards img='https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg' title='Riverdale' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg' title='The 100' />
      </div>
    </div>
  )
}

function Tvshow() {
  return (
    <div className='netflix__content-row'>
      <h1>Best Tv Shows</h1>
      <div className="netflix__content-recomendations">
        <Cards img='https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' title='Lucifer' />
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg' title='Sandman' />
        <Cards img='https://s2.glbimg.com/m3Ust9QaabclGO0nLNGsGHfCmhQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/I/v/7UJmBDTW2g8dwuXnFUHg/1899.jpg' title='1899'/>
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/butcher-clean-rgb_8snc.jpg' title='The Boys'/>
        <Cards img='https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg' title='Dark'/>
        <Cards img='https://br.web.img3.acsta.net/pictures/18/09/28/09/34/1699413.jpg' title='Titans' />
        <Cards img='https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg' title='The Witcher' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' title='Manifest' />
        <Cards img='https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg' title='Riverdale' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg' title='The 100' />
      </div>
    </div>
  )
}

function Family() {
  return (
    <div className='netflix__content-row'>
      <h1>Watch With Your Family</h1>
      <div className="netflix__content-recomendations">
        <Cards img='https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' title='Lucifer' />
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg' title='Sandman' />
        <Cards img='https://s2.glbimg.com/m3Ust9QaabclGO0nLNGsGHfCmhQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/I/v/7UJmBDTW2g8dwuXnFUHg/1899.jpg' title='1899'/>
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/butcher-clean-rgb_8snc.jpg' title='The Boys'/>
        <Cards img='https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg' title='Dark'/>
        <Cards img='https://br.web.img3.acsta.net/pictures/18/09/28/09/34/1699413.jpg' title='Titans' />
        <Cards img='https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg' title='The Witcher' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' title='Manifest' />
        <Cards img='https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg' title='Riverdale' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg' title='The 100' />
      </div>
    </div>
  )
}

function Animations() {
  return (
    <div className='netflix__content-row'>
      <h1>Animations For Kids</h1>
      <div className="netflix__content-recomendations">
        <Cards img='https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' title='Lucifer' />
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg' title='Sandman' />
        <Cards img='https://s2.glbimg.com/m3Ust9QaabclGO0nLNGsGHfCmhQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/I/v/7UJmBDTW2g8dwuXnFUHg/1899.jpg' title='1899'/>
        <Cards img='https://sm.ign.com/ign_br/screenshot/default/butcher-clean-rgb_8snc.jpg' title='The Boys'/>
        <Cards img='https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg' title='Dark'/>
        <Cards img='https://br.web.img3.acsta.net/pictures/18/09/28/09/34/1699413.jpg' title='Titans' />
        <Cards img='https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg' title='The Witcher' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' title='Manifest' />
        <Cards img='https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg' title='Riverdale' />
        <Cards img='https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg' title='The 100' />
      </div>
    </div>
  )
}

export default Content