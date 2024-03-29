import {Actions, ActionType} from './types/action';
import {AuthorizationStatus, FavoriteStatus, Genres, INITIAL_FILMS_COUNT} from '../const';
import {Film} from '../types/film';
import {Review} from '../types/review';
import {User} from '../types/user';

type State = {
  films: Film[],
  film?: Film,
  similarFilms: Film[],
  promoFilm?: Film,
  favoriteFilmList?: Film[],
  reviews: Review[],
  activeGenre: Genres,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  loadedFilmsCount: number,
  favoriteStatus?: FavoriteStatus,
  isFavorite: boolean,
  user?: User,
};

const initialState = {
  films: [],
  film: undefined,
  similarFilms: [],
  promoFilm: undefined,
  favoriteFilmList: [],
  reviews: [],
  activeGenre: Genres.AllGenres,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  loadedFilmsCount: INITIAL_FILMS_COUNT,
  favoriteStatus: undefined,
  isFavorite: false,
  user: undefined,
};

function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, activeGenre: action.payload as Genres};
    case ActionType.FilterFilms:
      return {...state, films: action.payload as Film[]};
    case ActionType.LoadMore:
      return {...state, loadedFilmsCount: action.payload as number};
    case ActionType.LoadFilms:
      return {...state, films: action.payload as Film[], isDataLoaded: true};
    case ActionType.LoadSelectedFilm:
      return {...state, film: action.payload as Film};
    case ActionType.LoadSimilarFilms:
      return {...state, similarFilms: action.payload as Film[]};
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload as Film};
    case ActionType.SetFavoriteFilmList:
      return {...state, favoriteFilmList: action.payload as Film[]};
    case ActionType.SetFaviroteFilmStatus:
      return {
        ...state,
        favoriteStatus: action.payload as FavoriteStatus,
        isFavorite: true,
      };
    case ActionType.LoadReviews:
      return {...state, reviews: action.payload as Review[]};
    case ActionType.ChangeUser:
      return {...state, user: action.payload as User};
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload as AuthorizationStatus,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return {...state};
  }
}

export type {State};

export {
  initialState,
  reducer
};
