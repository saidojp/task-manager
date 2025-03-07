# Task Manager

## Project Overview

This is a task management application built with Next.js, SQLite, and Tailwind CSS. The application allows users to:

- Create, view, update, and delete tasks (tickets)
- Categorize tasks by priority, status, and category
- Track progress of tasks
- Filter and organize tasks based on various criteria

The application features a clean, responsive UI built with React components and styling provided by Tailwind CSS and Radix UI components.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Environment Configuration:

   - Copy the sample environment file to create your local environment configuration:

   ```bash
   cp SAMPLE.env.local .env.local
   ```

   - Edit `.env.local` if needed (the default configuration should work for local development)

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Database Reset

If you need to reset the database:

```bash
npm run db:reset
# or
yarn db:reset
```

## Project Structure

- `/app` - Main application directory (Next.js App Router)
  - `/api` - API routes for ticket CRUD operations
  - `/components` - Reusable React components
  - `/context` - React context providers
  - `/lib` - Utility functions and database configuration
  - `/models` - Data models
  - `/ticket` - Ticket-related pages and components

## Technology Stack

- **Frontend**:
  - Next.js 13 (with App Router)
  - React 18
  - Tailwind CSS for styling
  - Radix UI for accessible component primitives
- **Backend**:
  - Next.js API routes
  - SQLite for database storage
- **Tools**:
  - ESLint for code linting

## Methods Used

### Database Operations

The application uses SQLite for data persistence. Key database methods include:

- **Direct SQL Queries**: The application uses raw SQL queries instead of an ORM for database operations.
- **Connection Pooling**: Database connections are managed and reused.
- **CRUD Operations**: Create, Read, Update, and Delete operations on tickets through API endpoints.

### API Implementation

- **REST API**: The application follows REST principles for its API design.
- **Route Handlers**: Next.js API routes to handle HTTP requests.
- **Error Handling**: Proper error handling and status codes are implemented.

### UI Components

- **Component-Based Architecture**: The UI is built using reusable React components.
- **Client-Server Components**: Utilizes Next.js 13's server and client components for optimal rendering.
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS.
- **Accessibility**: Radix UI components provide accessible UI primitives.

### State Management

- **React Context**: Used for global state management.
- **Server-Side Rendering**: Leverages Next.js for efficient rendering of data-dependent components.

## License

[MIT License](LICENSE)
