# Tamil Nadu Police Department Web Application

## Overview
This web application is designed for the Tamil Nadu Police Department to streamline essential operations such as managing FIR records, logging new incidents, planning beat patrol routes, and viewing departmental updates. The project is developed using React for the front end and employs component-based architecture for efficient rendering and state management.

## Features
- **FIR Records Management**: View and manage First Information Reports (FIRs).
- **Register FIR**: Log new FIRs with detailed incident information.
- **Beat Patrol Planning**: Monitor and plan patrol routes to enhance area security.
- **Departmental Updates**: Display recent updates and important notices.

## Technologies Used
- **React.js**: Front-end framework for building the user interface.
- **JavaScript/JSX**: For interactive UI components.
- **Lucide-react**: Icons for enhancing visual elements.
- **CSS/Tailwind CSS**: Styling framework for modern, responsive design.



### Explanation of Core Files
- **App.js**: The main component that manages navigation between different sections of the application. It includes:
  - **Header**: Displays the title of the department.
  - **Navigation Bar**: Allows users to switch between tabs (FIR Records, Register FIR, Beat Patrol, and Updates).
  - **Main Content**: Renders the selected tab component.
- **FIRContext.js**: Context provider for managing the FIR data and sharing state across components.
- **CaseFiles.js, LogIncident.js, PatrolRoutes.js, Updates.js**: Components that render the corresponding sections of the application.

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone <https://github.com/AJAY260505/cop-friendly-app>
   cd cop-friendly-app
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the application**:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) to view the application in your web browser.


## Customization
- **Styling**: Update the Tailwind CSS classes for custom themes.
- **Components**: Add new features by creating additional React components.

## License
This project is for educational purposes and is not intended for real-world deployment.

## Author
Ajay - BTech IT Student

Feel free to contact for any queries or suggestions!

