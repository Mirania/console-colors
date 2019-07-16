export as namespace colors
export = colors

declare namespace colors {
 
  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background bold.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function bold(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background black.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function black(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background red.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function red(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background green.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function green(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background gold.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function gold(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background blue.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function blue(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background magenta.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function magenta(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background cyan.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function cyan(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background white.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function white(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background grey.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function grey(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background gray.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function gray(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background ruby (similar to red).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function ruby(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background leaf (similar to green).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function leaf(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background yellow.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function yellow(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background ocean (similar to blue).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function ocean(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background pink.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function pink(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background sky (similar to blue).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function sky(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text or background light (similar to white).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function light(message?: any, ...optionalParams: any[]): void

  function log(message?: any, ...optionalParams: any[]): void
  function debug(message?: any, ...optionalParams: any[]): void
  function info(message?: any, ...optionalParams: any[]): void
  function warn(message?: any, ...optionalParams: any[]): void
  function error(message?: any, ...optionalParams: any[]): void
  function dir(value?: any, ...optionalParams: any[]): void
  function time(label?: string): void
  function timeEnd(label?: string): void
  function trace(message?: any, ...optionalParams: any[]): void
  function assert(condition?: boolean, message?: string, ...data: any[]): void
  function clear(): void
  function count(label?: string): void
  function countReset(label?: string): void
  function group(groupTitle?: string, ...optionalParams: any[]): void
  function groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void
  function groupEnd(): void
  function dirxml(value: any): void
  function table(...tabularData: any[]): void
  function markTimeline(label?: string): void
  function profile(reportName?: string): void
  function profileEnd(reportName?: string): void
  function timeline(label?: string): void
  function timelineEnd(label?: string): void
  function timeStamp(label?: string): void

  let Console: Console = console.Console;
  let context: any = console.context;

  /**
   * Returns a string colored with the specified text
   * and/or background colors.
   * 
   * @param style An object with the keys `text` and/or `background` (`bg` also works).
   * @param message Element to print.
   */
  function format(style: Style, message: any): string

  /**
   * Same functionality as the native `console.log()` function,
   * but colors the resulting string based on the specified style.
   * 
   * @param slog An object with the keys `text` and/or `background` (`bg` also works).
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function slog(style: Style, message?: any, ...optionalParams: any[]): void

  /**
   * Declare whether a function such as ```colors.red()``` will color the text
   * or the background (true = background, false = text). False by default.
   * 
   * @param bool Should the background be colored instead of text?
   */
  function colorBackground(bool: boolean): void

  /**
   * Declare a default style to be used when no text or background colors
   * have been specified. Note that this style will not interfere with
   * the main purpose of functions such as ```colors.red()``` (if
   * colorBackground=true and the default style requests blue backgrounds
   * and blue text, ```colors.red()``` will print blue text in a red
   * background).
   * 
   * @param bool Should the background be colored instead of text?
   */
  function setStyle(style: Style): void

  /**
   * Clear a default style that was previously set with ```colors.setStyle()```.
   */
  function clearStyle(): void

  interface Style {
    text?: 'bold' | 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
           'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
    background?: 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
                 'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
    bg?: 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
         'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
  }

}
