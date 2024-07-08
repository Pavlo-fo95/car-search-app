declare module 'react-search-input' {
    import { Component } from 'react';
  
    export interface SearchInputProps {
      className?: string;
      onChange: (term: string) => void;
    }
  
    export default class SearchInput extends Component<SearchInputProps, any> {}
  }