# Changelog
---
### 14 JUL 2024
- Created `_redirects` in `public` directory.
- Currently, all non-skipped tests pass.
- Fixed `Timed out in waitForElementToBeRemoved` error by adding a `timeout` option for `waitForElementToBeRemoved` to wait for the loading page/screen to be removed and selecting SVG element with `queryByTitle`. 
- Fixed known false positive tests rendering a single `div` tag in the `body` element. This was due by passing a `router` prop to the `App` component, rendering a `RouterProvider` as if it were defined in `index.jsx`, and not waiting for the loading page/screen to be removed.
- Product/items can be added to the cart from the shop page; on the shop page, clicking the add to cart button will add 1 respective product/item to the cart. 
- Hovering over product/item cards will reveal the `QuickActions` component.
---
### 13 JUL 2024
- On the shop page, instead of wrapping the product card's picture with a link, it's content are wrapped around a link.
- Created `QuickActions` component.
---
### 12 JUL 2024
- `Main` component's test suite is failing.
- Created `ErrorPage` CSS module.
- Created hover transitions for anchors created by the `NavAnchor` component. 
- The scroll button to the top and bottom will not be revealed if there is no vertical scrollbar. If a user is at the top of the page, scroll button to the top will not be revealed. Likewise, if a user is at the bottom of the page, the scroll button to the bottom will not be revealed.
- The scroll button to the top will be revealed if `document.documentElement.scrollTop === 0`.
- The scroll button to the bottom will be revealed if `document.documentElement.scrollTop + window.innerHeight !== document.body.scrollHeight`.
- `ScrollButtons` is not rendered in the `Main` component.
- Saved `arrow_downward_alt` and `arrow_upward_alt` SVG files.
---
### 11 JUL 2024
- Created `ScrollButtons` component and it's respective CSS module; the component will be rendered in the `App` component.
- The cart icon will not shake when incrementing or decrementing the quantities.
- The product modal will be centered on the page if it's `DOMRect.y` is less than or equal to 0.
- Disabled scroll when the product modal is open.
---
### 10 JUL 2024
- The cart icon will shake when the quantity changes.
- Created `callback` function in `Modal` component to be used with a `ResizeObserver`; the modal will now render above or below a product card if there is space within the `document.body.scrollHeight`.
---
### 09 JUL 2024
- Added `isUpdatingCart` to `CartProvider` to add and remove a class to the container with number of items in cart.
- Tried to style input quantity buttons behind the input element; buttons are not clickable by mouse with `z-index: -1`.
- Fixed tests to accommodate added and removed content.
- Added a variety of styles to a variety of components.
---
### 08 JUL 2024
- All pages and the header's children will horizontally center page with `margin: auto` at a minimum screen size of 1025 pixels.
- Scroll is disabled when product modal is open.
- The product modal will be scrolled into center view with smooth scrolling; sometimes content behind the modal are hidden.
- The product modal will be positioned near the product/item that was clicked to trigger the product modal.
- Currently, product/item cards on the shop page will have their content stacked vertically for mobile and desktop.
- Experimented with the `ScrollRestoration` component and the `preventScrollReset` attribute.
- Created stylesheet for the `Home` component.
---
### 07 JUL 2024
- On desktop, individual product page's will show the product/item on the center of the page with it's description to the right of it's image. On mobile, the product/item's content will be stacked vertically.
- Attempted to use `ScrollRestoration` component and the `preventScrollReset` attribute.
- If a product modal is closed, the page's scroll location does not reset.
- Currently, clicking a product/item on the shop page will render a product modal but the page's scroll location is reset; the page will scroll back to the top.
- Currently, products in the modal view will have different heights to accommodate it's content and will not exceed a width of `700px`.
- Items in cart are centered on desktop view.
- Applied styles throughout stylesheet modules.
---
### 05 JUL 2024
- On mobile, content for modal product cards are vertically stacked. On desktop, the content is divided into two columns; product picture will be on the left column and the form will be on the right column.
- Wrapped the form's submit button and quantity input into a `.form-controls` generic container.
- Created `onKeyDownHandler` in the `InputQuantity` component.
- Added `close`, `increment`, `decrement` icons.
- Created stylesheet for `FormQuantity` component.
---
### 04 JUL 2024
- On mobile, only one column of products will be displayed in the shop page; more columns of products will be displayed as the screen/window size grows.
- Moved `Josefin_Sans` to `fonts` directory and deleted fonts' subdirectory `DM_Sans,Josefin_Sans` for duplicate font `DM-Sans`.
- The splash screen is animated and rotates clockwise while application loads.
- Created a few stylesheets.
---
### 03 JUL 2024
- Created a few stylesheets.
- Created `illustrations` subdirectory.
- Currently, exceptions will render the root's `errorElement` path; in this case, the `ErrorPage` component.
- Experimented throwing an exception in the `Shop` component to trigger it's `errorElement` path.
- Currently, all non-skipped test suites pass.
---
### 02 JUL 2024
- Created `fonts` subdirectory.
- Created `Loading` stylesheet.
- Currently, `ErrorPage` uses the `useRouteError` hook to retrieve an error object.
- Removed the `catch` method in the `loader` module, so the routes' root's `errorElement` will render.
- Currently, `ErrorPage` test suite fails.
---
### 01 JUL 2024
- Currently, `Category` and `Shop` test suites fail.
- Created a handful of stylesheets.
- `Category`, `Cart`, and `Product` components use the `ProductCard` component with different child components.
- Created `FormQuantity` and `ProductCard` components; both use namespace for child components.
- On cart page, clicking an item/product's picture will navigate to the item/product's page with shop categories. 
---
### 30 JUN 2024
- The `App` component will render a splash screen on initial load and on page refresh.
- The `App` component now takes an object prop, `router`.
- Moved `router` variable into the `index` module.
---
### 28 JUN 2024
- The `Modal` component no longer uses an `Outlet` to render a product. Instead, the `Product` component is directly inserted into the `Modal` component.
- Created `loader` module that will fetch data from an API.
- Created router with `createBrowserRouter` and passed the router into the `RouterProvider` component; data APIs enabled.
- Rewrote `routes` module to only have an array of route objects.
- Renamed `Routes` to `routes`.
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