export interface DynamicTags {
  name: string;
  content: string;
}

export interface GlobalState {
  seo: {
    title: string;
    dynamicTags?: DynamicTags[];
  };
}

export type Action =
  | { type: 'SET_SEO_TITLE'; payload: string }
  | { type: 'SET_SEO_DYNAMIC_TAGS'; payload: DynamicTags[] };

export const initialGlobalState: GlobalState = {
  seo: {
    title: '',
  },
};
