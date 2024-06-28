# Changelog
---
### 28 JUN 2024
- 
- Created `routes-revision` branch.
- Currently, the `Home` and `Shop` make use of an active class.
- Created `NavAnchor` component, it's respective stylesheet module, and test suite; returns `NavLink` component.
- Pressing the arrow up and down keys will increment or decrement the quantity input's value.
---
### 27 JUN 2024
- Currently, all non-skipped tests pass.
- Added basic input validation only when an item is added to the cart.
- Created `isPressedKeyValid` utility function; accepts a key, immediately returns `true` if the key is a number, otherwise return a boolean if the key exists in an array of acceptable keys.
- Pressing the `Backspace` key while on the cart page and focused on a quantity input will remove it's respective item from the cart.
- Clicking the decrement button will decrement the quantity's value by one and will not exceed 1 unless on the cart page, the respective item will be removed from the cart.
- Clicking the increment button will increment the quantity's value by one and will not exceed 999.
- Created `formatPrice` utility function; accepts a number value and returns a string using `new Intl.NumberFormat`. For example, `formatPrice(3.5)` returns `'$3.50'`.
---
### 26 JUN 2024
- Added an `onKeyDown` event handler to the quantity input to prevent certain keyboard keys.
- Quantity input `min` and `max` attributes changed to `minLength` and `maxLength` 
- Quantity input type changed from `number` to `text` and added the attribute-value pair `inputMode="numeric"`.
- Created `InputQuantity` component, it's respective test suite and CSS module; currently, the component accepts four props: `quantity`, `setQuantity`, `incrementHandler`, and `decrementHandler`.
- Created additional tests to the `Header` test suite for the cart's 'notification' bubble.
- Created increment and decrement quantity buttons.
- Added 'notification' bubble near shopping cart icon displaying number of unique items in cart.
---
### 25 JUN 2024
- Removed product description in `Cart` component.
- Quantities can be changed on the cart page; if the quantity input has focus, and the `Backspace` key is pressed, the item is removed from the cart. Changing quantities will update the subtotal.
- The `Cart` component now renders items that are in the cart and the subtotal; if there are no items in the cart, the component will render a message letting the user know the cart is empty.
- Provided more tests in the `Cart` test suite.
---
### 24 JUN 2024
- User can now add items into cart; if the same item is added after previously adding it to the cart, the quantities will be added together.
- Created `CartContext` and `CartProvider` in `Cart` module; currently, `Cart` and `Product` components utilize the `useContext` hook.
- Moved `BrowserRouter` from the root (`index.jsx`) to the `App` component.
- A single value is exported from the `Routes` module.
- Renamed `routes` to `Routes`.
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