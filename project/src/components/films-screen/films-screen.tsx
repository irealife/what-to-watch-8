import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../logo/logo';
import {FilmList} from '../film-list/film-list';
import {Footer} from '../footer/footer';
import TabsFilm from '../tabs/tabs-film';
import {Film} from '../../types/film';
import {reviews} from '../../mocks/reviews';

type FilmsScreenProps = {
  films: Film[];
}

function FilmsScreen({films}: FilmsScreenProps): JSX.Element {
  const history = useHistory();
  return (
    <>
      <section key={films[0].id} className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={films[0].backgroundImg} alt={films[0].name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to="/login">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <Link to="/login" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => history.push(AppRoute.Film)}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={films[0].posterImg} alt={films[0].name} width="218" height="327"/>
            </div>

            <TabsFilm film={films[0]} reviews={reviews} />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.filter((item) => item.genre === films[0].genre).slice(0, 4)} />

        </section>

        <Footer />

      </div>
    </>
  );
}

export default FilmsScreen;
