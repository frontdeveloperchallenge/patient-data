# Patient Data Management

## Project overview

This project is a frontend application built with React and TypeScript using Vite. The goal is to manage patient data through a user-friendly interface. The application features include:

- **Retrieve Patient Data:** Fetch a list of patient records from an API.
- **Patient Cards:** Display individual patient records in card format.
- **Expand/Collapse Details:** Each card includes a button or icon to show more details.
- **Modal for Editing/Adding:** Users can edit existing patient information or add new patients through a modal interface.
- **Form Validations:** Ensure data accuracy and completeness using robust form validation.
- **Optional Enhancements:** Smooth animations, responsive design, and notifications for successful or failed data modifications.

## Technologies Used

- **React** with **TypeScript:** Core framework and language for building the UI.
- **Vite:** Fast and modern development environment.
- **Redux Toolkit:** For scalable and robust state management.
- **React Router:** For client-side routing.
- **Axios:** For handling API requests.
- **React Hook Form & Zod:** For efficient form handling and validation.
- **CSS Modules / Styled Components:** For custom styling.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone <https://github.com/frontdeveloperchallenge/patient-data.git>
   cd patient-data

2. **Install dependencies**
   ```bash
   npm install
   cd patient-data

3. **Start the development server**
   ```bash
   npm run dev
   cd patient-data

The application should now be running at http://localhost:5173.


## Project Structure
The project is organized to maintain clarity and scalability. Below is an overview of the folder structure:

```bash
/src
 ├── /components       # Reusable UI components (PatientCard, Modal, Button, etc.)
 ├── /pages            # Main pages/views (Home, Patients, NotFound, etc.)
 ├── /hooks            # Custom hooks (e.g., usePatients)
 ├── /services         # API service calls (patientService.ts)
 ├── /styles           # Global and component-specific styles
 ├── /utils            # Utility functions and helpers
 ├── App.tsx           # Main app component including routing
 ├── main.tsx          # Entry point of the application
 └── index.css         # Global CSS

## Usage

Routing:
The application uses React Router for navigation. Example routes include:

/ - Home page.
/patients - Patient management view.
* - A fallback route for 404 Not Found.
Data Fetching:
Patient data is fetched from an external API using Axios. Modify the API endpoint in /services/patientService.ts as necessary.

State Management:
Redux Toolkit is used to manage the global state. This demonstrates the ability to handle more complex state interactions even in a small project.

Forms & Validation:
The Patient Form leverages React Hook Form and Zod to manage form state and validate inputs effectively.


## Design decisions
Tooling:
Vite was chosen for its speed and simplicity, replacing CRA which is now deprecated. Redux Toolkit is used to showcase scalable state management skills.

Custom Components:
Avoiding ready-made UI libraries (e.g., MaterialUI) allows for demonstrating expertise in building reusable and maintainable UI components from scratch.

Form Management:
React Hook Form and Zod provide an efficient and robust way to handle form inputs and validations.

## Optional enhancements
Notifications:
Consider integrating libraries such as react-toastify to show user-friendly notifications for successful or failed data operations.

Animations:
Libraries like framer-motion can be used to add smooth animations and improve overall user experience.

## Running tests
```bash
npm run test