#  🏪 NanoxAI client store

This is an Angular-based web application for managing products in a store. Users can add, edit, and delete products, with data fetched and updated through an API.

## Features

- Display a list of products
- Add new products
- Edit existing products
- Delete products
- Search for products by name or tag
- Responsive UI using Fomantic-UI

## Technologies

- 🅰️ **Angular 14**: Frontend framework
- **TypeScript**: Programming language
- **Fomantic-UI**: For styling components
- **Docker**: (for containerization, if applicable)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- 🅰️ Angular CLI (v14 or higher)
- 🐳 Docker (for Docker setup)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   run npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Docker Setup 🐳

To set up the project with Docker, follow these steps:

1. Ensure Docker is installed on your system.

2. Build the Docker image by running the following command in the root of the project directory:
   ```bash
   docker build -t nanox-client-yoel .
3. Once the image build run the following command
   ```bash
   docker run -p 4200:4200 nanox-server-yoel
