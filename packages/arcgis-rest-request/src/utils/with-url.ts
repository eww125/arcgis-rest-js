import { IRequestOptions } from "./IRequestOptions";

export function withUrl<T extends (...args: any[]) => any>(
  func: T,
  url: string
): (...funcArgs: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    const options: IRequestOptions =
      typeof args[args.length - 1] === "object"
        ? {
            ...{ url },
            ...args.pop()
          }
        : { url };

    return func(...[...args, options]);
  };
}
