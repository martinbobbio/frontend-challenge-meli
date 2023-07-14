export interface GlobalState {
  search: string;
}

export type Action = { type: 'SET_SEARCH'; payload: string };

export const initialGlobalState: GlobalState = {
  search: '',
};
