import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import { appInfo } from "./appinfo";

let initialized = false;

export function initSuperTokens() {
  if (typeof window === "undefined") return;
  if (initialized) return;
  initialized = true;

  SuperTokens.init({
    appInfo,
    recipeList: [
      Session.init({
        tokenTransferMethod: "cookie",
        onHandleEvent: (event) => {
          if (event.action === "UNAUTHORISED") {
            window.location.href = "/auth/sign-in";
          }
        },
      }),

      ThirdParty.init(),
    ],
    clientType: "web",
  });
}
