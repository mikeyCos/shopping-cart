# Changelog
---
### 24 JUN 2024
- 
---
### 21 JUN 2024
- Each `product.title` is passed into the `encodeURIComponent()` function to replace conflicting URI characters.
- Created test suite for the `Modal` component and attempted to test the dialog element.
- Renamed `data.mocks` to `mocks`, and declared `fetchMock` in module.
- Renamed `ProductLayout` to `Modal` and moved to `components` directory.
- For now, fixed `Category` and `Shop` test suites by removing `Promise.resolve()` in the `json` method.
```js
json: vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products);
```
---
### 20 JUN 2024
- Test suites for `Category` and `Shop` components are failing; `dataCategories` and `dataProducts` appear to be mock objects.
- Created test suite for the `Product` component.
- If a user clicks on a product's image, a modal will appear with more product details.
- The `useLocation` hook is used in the `App` component to pass in a location prop based on the location's object or if a `state` object property exists, then it's `previousLocation` property.
- Created `DefaultRoutes` and `ProductRoutes` components in the `routes` module; these return a valid React element to render the route tree. 
- Declared `BrowserRouter` at the root (`index.jsx`) of the application.
---
### 19 JUN 2024
- Experimenting with `Product` and `ProductLayout` components; renders a dialog element when a product on the shop page is clicked.
- The `Category` component no longer renders a unordered list, but a products section with 'X' amount of article elements.
- The `ErrorPage` component is now rendered if `error` state in the `Shop` component exists; it takes an `errorMessage` prop with a fallback value.
- Created `Category.module.css`.
- `Category` and `Categories` test suites match with their respective snapshot.
- Currently, all test suites now pass.
---
### 18 JUN 2024
- Split `products` in `data.mocks` into an object and an array.
- Utility function `parseProducts` is causing `Category` test suite to fail.
- Created `parseProducts` and `parseCategory`; these utility functions are used to create an object of products with the categories as keys and an array value of their respective products.
```js
products = {
  all: [ ...all products ]
  electronics: [ ...objects of category "electronics" ],
  jewelry: [ ...objects of category "jewelry" ],
  mensClothing: [ ...objects of category "men's clothing" ],
  womensClothing: [ ...objects of category "women's clothing" ],
}
```
- Created `utilities` directory.
- Renamed `tests` directory to `__tests__`.
---
### 17 JUN 2024
- Category test suite fails.
- Attempted to test `Category` (Outlet) component.
- Created `data.mocks`; includes placeholder data.
- Utilized `mockReturnValueOnce` for the mocked `fetch` method.
- Moved fetch method from `Categories` component to `Shop` component.
---
### 16 JUN 2024
- Categories test suite fails.
- Added children routes to the shop route.
- Outlet component is rendered inside the `Shop` component; this will be the default shop category.
---
### 14 JUN 2024
- Added `cart-variant` and `progress_activity` SVGs to assets.
- Style sheets now end with `.module.css`.
- Created `Cart`, `Categories`, `Loading`, and `Shop` components and respective test templates.
- Created `PROJECT_SPECIFICATIONS.md`.
---
### 13 JUN 2024
- Updated README.md.
- All test suites pass.
- Created `routes` directory and `routes.jsx`.
- Created `layouts` directory and `BasicLayout.jsx`; layout consists of `header`, `Main`, `Footer` components.
- Created empty directories: `utilities`, `data`, `fonts`, `media`.
- Created `demo` directory with a `DEMO.md`.
- Created `tests` directory and a handful of test templates.
- Installed `react-router-dom` to `dependencies`.
- Installed `vitest`, `jsdom`, `testing-library/jest-dom`, `testing-library/react`, `testing-library/user-event` to `devDependencies`.
---
### 01 JUN 2024
- Initial commit.
- Changed `README.md` into a boilerplate README.
- Created an `index` component and changed script src in `index.html` from `/src/main.jsx` to `/src/index.jsx`.
- Created skeleton `Header`/`Main`/`Footer` components.
- Created `.prettierignore`.
- Created `CHANGELOG.md`.
---