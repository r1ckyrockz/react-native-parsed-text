declare module 'react-native-better-parsed-text' {
  import { Component } from 'react';
  import { TextProps } from 'react-native';

  interface BaseParseShape extends Pick<TextProps, Exclude<keyof TextProps, 'onPress' | 'onLongPress' >> {
    renderText?: (matchString: string, matches: string[]) => string;
    onPress?: (text: string, index: number) => void;
    onLongPress?: (text: string, index: number) => void;
  }

  interface DefaultParseShape extends BaseParseShape {
    type?: 'url' | 'phone' | 'email';
  }

  interface CustomParseShape extends BaseParseShape {
    pattern: string | RegExp;
  }

  export type ParseShape = DefaultParseShape | CustomParseShape;

  export interface ParsedTextProps extends TextProps {
    parse?: ParseShape[];
    childrenProps?: TextProps;
  }

  export default class ParsedText extends Component<ParsedTextProps> {}
}
