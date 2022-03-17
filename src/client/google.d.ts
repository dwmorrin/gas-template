/**
 * https://developers.google.com/apps-script/reference/html
 * The google object is injected by HTMLService when rendering the HTML page.
 */
declare const google: {
  script: {
    // https://developers.google.com/apps-script/guides/html/reference/run
    run: {
      // any exposed server-side function (functions can also be private - see docs)
      [k: string]: (...args: any[]) => void;
      // callback on success
      withSuccessHandler: (returnValue: any, userObject?: any) => ThisType;
      // callback on error
      withFailureHandler: (e: Error, userObject?: any) => ThisType;
      // attach user object to the callbacks
      withUserObject: (userObject: any) => ThisType;
    };
    // https://developers.google.com/apps-script/guides/html/reference/history
    history: {
      push: (
        stateObject: any,
        params: Record<string, string | string[]>,
        hash: string
      ) => void;
      replace: (
        stateObject: any,
        params: Record<string, string | string[]>,
        hash: string
      ) => void;
      setChangeHandler: (
        cb: (e: { state: any; location: Location }) => void
      ) => void;
    };
    // https://developers.google.com/apps-script/guides/html/reference/url
    url: {
      getLocation: (cb: (location: Location) => void) => void;
    };
  };
};
