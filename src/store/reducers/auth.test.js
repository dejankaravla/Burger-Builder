import reducer from "./auth";

import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-Token",
          userId: "some-user-id",
        }
      )
    ).toEqual({
      token: "some-Token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
