export type Styles = {
  disabled: string;
  'is-hidden': string;
  underline: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
