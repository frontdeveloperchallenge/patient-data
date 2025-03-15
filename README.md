# Patient Data Management

## Project overview

This project is a frontend application built with React and TypeScript using Vite. The goal is to manage patient data through a user-friendly interface. The application features include:

- **Retrieve patient data:** Fetch a list of patient records from an API.
- **Patient cards:** Display individual patient records in card format.
- **Expand/collapse eetails:** Each card includes a button or icon to show more details.
- **Modal for editing/adding:** Users can edit existing patient information or add new patients through a modal interface.
- **Form validations:** Ensure data accuracy and completeness using robust form validation.
- **Optional enhancements:** Smooth animations, responsive design, and notifications for successful or failed data modifications.

## Technologies Used

- **React** with **TypeScript** - Core framework and language for building the UI.
- **Vite** - Fast and modern development environment.
- **Redux Toolkit** - For scalable and robust state management.
- **React Router** - For client-side routing.
- **Axios** - For handling API requests.
- **React Hook Form / Zod** - For efficient form handling and validation.
- **React Testing Library** - For unit testing React components.
- **CSS Modules** - For custom styling.

## Installation

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```sh
git clone <https://github.com/frontdeveloperchallenge/patient-data.git>
cd patient-data
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the development server

```sh
npm run dev
```

The application should now be running at [http://localhost:5173](http://localhost:5173).

## Project structure

```
/src
 ├── /components       # Reusable UI components (PatientCard, Modal, Button, etc.)
 ├── /pages            # Main pages/views (Home, Patients, NotFound, etc.)
 ├── /hooks            # Custom hooks (e.g., usePatients)
 ├── /services         # API service calls (patientService.ts)
 ├── /styles           # Global and component-specific styles
 ├── /utils            # Utility functions and helpers
 ├── /tests            # Unit tests using React Testing Library
 ├── App.tsx           # Main app component including routing
 ├── main.tsx          # Entry point of the application
 └── index.css         # Global CSS
```

## Usage

- **Routing:**
The application uses React Router for navigation. Example routes include:
  - `/` - Home page.
  - `/patients` - Patient management view.
  - `*` - A fallback route for 404 Not Found.

- **Data fetching:**
  Patient data is fetched from an external API (https://63bedcf7f5cfc0949b634fc8.mockapi.io/users) using Axios.

- **State management:**
  Redux Toolkit is used to manage the global state.

- **Forms & validation:**
  The Patient Form uses React Hook Form and Zod to manage form state and validate inputs effectively.

## Design decisions

- **Tooling:**
  Vite was chosen for its speed and simplicity, given that this is a small project. Althought not entirely necessary for a small app, Redux Toolkit is used to showcase state management skills.

- **Custom Components:**
  Using SASS and avoiding UI libraries like Material UI, in order to build reusable and maintainable UI components from scratch.

- **Form Management:**
  React Hook Form and Zod provide an efficient and robust way to handle form inputs and validations.

## Optional Enhancements

- **Notifications:**
  Integrating `react-toastify` to show user-friendly notifications for successful or failed data operations.

- **Animations:**
  Libraries like `framer-motion` can be used to add smooth animations and improve overall user experience.

## Running Tests

Unit tests are implemented using **React Testing Library**. To run tests, use the following command:

```sh
npm run test
```