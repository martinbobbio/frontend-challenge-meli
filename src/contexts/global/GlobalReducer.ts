// React
import { Reducer } from 'react';
// States
import { Action, GlobalState } from './GlobalState';

export const globalReducer: Reducer<GlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_SEO_TITLE':
      return {
        ...state,
        seo: { ...state.seo, title: action.payload },
      };
    case 'SET_SEO_DYNAMIC_TAGS':
      return {
        ...state,
        seo: { ...state.seo, dynamicTags: action.payload },
      };
    default:
      return state;
  }
};
