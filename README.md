# React Cat Lover
Generate a page like Tinder but for Cats

# Requirement
- Node >=10.0+
- Npm >= 4.0+
- react >= 16.13+
- react-dom >= 16.13+

# Installing
Using npm:
```
npm install react-cat-lover
```

# Example
## Using Login Page
```js
// Import LoginPage from react-cat-lover module
import { LoginPage } from "react-cat-lover";

const YourLoginCompoent = () => <LoginPage />;

export default YourLoginCompoent;
```

## Preview Login Page
![Preview Login Page](https://i.imgur.com/5P02jll.png)

You can change left Image Background with backgroundImage prop

```js
import { LoginPage } from "react-cat-lover";

const YourLoginCompoent = () => (
  <LoginPage backgroundImage={yourBgUri} />; // add your image uri
);

export default YourLoginCompoent;
```