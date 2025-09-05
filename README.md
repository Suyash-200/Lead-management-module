Lead Management System
A modern React-based lead management application with a clean UI, form validation, and real-time status updates.

🚀 Features
Lead Management: Create, view, and update lead statuses

Responsive Design: Works seamlessly on desktop and mobile devices

Form Validation: Comprehensive validation for all input fields

Real-time Updates: Instant status changes with visual feedback

Pagination: Efficient data handling with pagination

Toast Notifications: User-friendly success/error messages

Loading States: Visual feedback during API operations

🛠️ Tech Stack
Frontend: React with Tailwind CSS

State Management: React Context API

HTTP Client: Axios

Icons: SVG icons

Build Tool: Vite

📦 Installation
Clone the repository:

bash
git clone (https://github.com/Suyash-200/Lead-management-module.git)
cd lead-management-system
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
🏗️ Project Structure
text
src/
├── Components/
│   ├── Buttons/
│   │   ├── CancelButton.jsx
│   │   ├── ResetButton.jsx
│   │   └── SaveButton.jsx
│   ├── Inputs/
│   │   ├── EmailInput.jsx
│   │   ├── PhoneInput.jsx
│   │   └── TextInput.jsx
│   ├── Labels/
│   │   └── FormLabel.jsx
│   ├── Toast/
│   │   ├── Toast.jsx
│   │   └── ToastService.jsx
│   ├── CreateLeadForm.jsx
│   ├── LeadsTable.jsx
│   └── Loader.jsx
├── store/
│   ├── LoadingContext.jsx
│   └── ToastContext.jsx
├── Utils/
│   ├── Constants.js
│   └── Helper.js
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
🎯 Key Components
App.jsx
Main application component that manages:

Lead data state

Pagination logic

Modal state management

API integration

CreateLeadForm.jsx
Modal form for creating new leads with:

Form validation

Real-time input validation

Loading states

Success/error handling

LeadsTable.jsx
Displays leads in a responsive table with:

Status badges with color coding

Pagination controls

Statistics cards

Status update functionality

🔌 API Integration
The application uses a JSON server API with the following endpoints:

GET /leads - Fetch all leads

POST /leads - Create a new lead

PATCH /leads/:id - Update lead status

Email validation to prevent duplicates

🎨 UI/UX Features
Gradient backgrounds for modern aesthetics

Hover effects and smooth transitions

Status indicators with color-coded badges

Responsive design for all screen sizes

Loading spinners during operations

Toast notifications for user feedback

📱 Responsive Design
The application is fully responsive with:

Mobile-first approach

Flexible grid layouts

Adaptive table displays

Touch-friendly buttons and controls

🔒 Validation
Email validation: Proper format and uniqueness check

Phone validation: 10-digit format enforcement

Required fields: All form fields are mandatory

Regex patterns: Custom validation rules

🚦 Status Management
Four lead statuses supported:

NEW (Blue) - Recently added leads

CONTACTED (Amber) - Leads that have been contacted

QUALIFIED (Green) - Leads that qualified

REJECTED (Red) - Leads that were rejected

🛡️ Error Handling
Comprehensive error boundaries

User-friendly error messages

Network error handling

Form validation errors

📊 Performance
Efficient pagination to handle large datasets

Optimized re-renders with proper state management

Lazy loading for modal components

Minimal bundle size with tree shaking

🔧 Development Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

🌟 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Fork the repository

Create a feature branch

Make your changes

Add tests if applicable

Submit a pull request

