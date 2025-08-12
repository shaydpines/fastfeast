# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## WebStorm tip: Show brackets in different colors (Rainbow Brackets)

If you want WebStorm to color each nested pair of brackets/braces/parentheses differently ("rainbow" colors), enable the built‑in Rainbow Brackets feature:

- WebStorm 2022.3 and later
  1. Open Settings/Preferences (Ctrl+Alt+S on Windows/Linux, Cmd+, on macOS).
  2. Go to Editor → Color Scheme → Rainbow.
  3. Check "Rainbow parentheses", "Rainbow braces", and optionally "Rainbow brackets" and "Rainbow method brackets".
  4. Apply and OK.

- Older versions (when a separate plugin was used)
  - Install/enable the "Rainbow Brackets" plugin via Settings → Plugins → Marketplace, then configure it under Editor → Color Scheme → Rainbow.

Manual per‑language colors (alternative)
- You can also manually change bracket colors per language via:
  Editor → Color Scheme → Language Defaults → Braces and Operators, Parentheses, Brackets → set Foreground colors.
  This won’t auto‑cycle by nesting depth, but lets you pick fixed colors.

Troubleshooting
- If you don’t see colors, ensure the active color scheme supports them (Editor → Color Scheme). Both Light and Darcula schemes work; custom schemes may override settings.
- You can export/import your color scheme via File → Manage IDE Settings → Export/Import Settings if you want to share these with teammates.


### If you don't see the "Rainbow" section in WebStorm
- You may be on an older WebStorm version. The built‑in Rainbow settings were added in 2022.3. Update WebStorm to 2022.3+ and check again under Editor → Color Scheme → Rainbow.
- If updating isn’t an option, install the Rainbow Brackets plugin: Settings → Plugins → Marketplace → search for "Rainbow Brackets" → Install/Enable → restart IDE. Then configure it under Editor → Color Scheme → Rainbow.
- Ensure your active color scheme isn’t overriding or hiding rainbow settings. Try switching to the default Darcula or Light scheme (Settings → Editor → Color Scheme), then revisit Editor → Color Scheme → Rainbow.
- As a manual alternative per language: Editor → Color Scheme → Language Defaults → Braces and Operators / Parentheses / Brackets → set Foreground colors. This won’t auto‑cycle by nesting depth but lets you pick fixed colors.

Quick test snippet for bracket coloring (paste into a .js or .ts file):

```js
function globalFunction({ options = {} }) {
  const { minLength } = options;

  /**
   * @description Validator
   * @param {string?} value - parameter description
   */
  const localFunction = value => {
    let isValid = value?.length >= minLength ?? 3; // line comment
    /* Block comment */
    isValid = isValid && (/^\d.[A-F]+$/i).test(value);
    return {
      isValid,
    };
  };
}

@defineElement("download-button")
class DownloadButton extends HTMLButtonElement {
  static STATIC_FIELD = `<span title="HTML injection">${globalVariable}</span>`;

  static get observedAttributes() {
    return [ 'data-test' ];
  }

  #field = { prop: 1 };
  
  method() {
    this.click();
      
    label:
      while (true) {
        break label;
      }
  }
}

export const EXPORTED_VARIABLE = 1;
export function exportedFunction() {}
export class ExportedClass {}

const globalVariable = "chars\n\u11";

function JsxComponent() {
  return <JsxClientComponent />;
}
```
