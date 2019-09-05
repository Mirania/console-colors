export as namespace colors
export = colors

declare namespace colors {
 
  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text bold.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function bold(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text black.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function black(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text red.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function red(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text green.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function green(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text gold.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function gold(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text blue.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function blue(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text magenta.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function magenta(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text cyan.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function cyan(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text white.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function white(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text grey.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function grey(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text gray.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function gray(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text ruby (similar to red).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function ruby(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text leaf (similar to green).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function leaf(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text yellow.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function yellow(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text ocean (similar to blue).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function ocean(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text pink.
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function pink(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text sky (similar to blue).
   * 
   * @param message Element to print.
   * @param optionalParams Other elements to print.
   */
  function sky(message?: any, ...optionalParams: any[]): void

  /**
   * Same functionality as the native `console.log()` function,
   * but makes the resulting text light (similar to white).
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

  /**
   * Returns a string colored with the specified text
   * and/or background colors.
   * 
   * @param style An object with the keys `text` and/or `background` (`bg` also works).
   * @param message Element to print.
   */
  function format(style: Style, message: any): string

  interface Style {
    text?: 'bold' | 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
           'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
    background?: 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
                 'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
    bg?: 'black' | 'red' | 'green' | 'gold' | 'blue' | 'magenta' | 'cyan' | 'white' | 'grey' |
         'gray' | 'ruby' | 'leaf' | 'yellow' | 'ocean' | 'pink' | 'sky' | 'light'
  }

}
