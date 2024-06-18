# Changelog
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