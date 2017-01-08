export default class Helpers {
  public static isValid = (value: string) => value.trim().length > 0;

  public static pluralize(count:number, word: string) {
    return count === 1 ? word : word + 's';
  }
}