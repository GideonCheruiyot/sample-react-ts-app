import { actionCreator, Action } from "~/state/actions";
import { Dispatch } from "redux";
import { State } from "~/state";

export const LOAD_GAME = "game/load";

export interface LoadGameAction extends Action<typeof LOAD_GAME> {
  id: number;
  game: object;
}

export const loadGame = actionCreator<LoadGameAction>(LOAD_GAME);

export const fetchGame = (id: number) => {
  return async (dispatch: Dispatch<State>) => {
    const response = await fetch(`https://xkcd.com/info.${id}.json`)
    const result = await response.json();

    dispatch(loadGame({ id, game: result }))

    return result;
  }
}