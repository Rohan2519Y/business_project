# Business Project

A full-stack business application with a React frontend and Node.js/Express backend, featuring a MySQL database for storing business information and contact forms.

## 🏗️ Project Structure

```
business/
├── business_backend/          # Node.js/Express backend server
├── business_frontend/         # React frontend application
└── business.sql              # MySQL database schema
```

## 🚀 Features

- **Frontend**: Modern React application with Tailwind CSS styling
- **Backend**: Express.js REST API with MySQL database
- **Database**: MySQL database for storing business information
- **Contact Forms**: Handle customer inquiries and service requests
- **Responsive Design**: Mobile-friendly user interface

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MySQL** (v8.0 or higher)
- **Git** (for cloning the repository)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd business
```

### 2. Database Setup

1. **Start MySQL service** on your machine
2. **Create the database** by running the SQL file:

```bash
mysql -u root -p < business.sql
```

Or manually in MySQL:
```sql
CREATE DATABASE IF NOT EXISTS `business`;
USE `business`;
```

### 3. Backend Setup

```bash
cd business_backend
npm install
```

**Configure Database Connection:**
Update the database configuration in your backend files (likely in `routes/pool.js` or similar) with your MySQL credentials:

```javascript
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'business',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```

### 4. Frontend Setup

```bash
cd business_frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd business_backend
npm start
```

The backend server will start on `http://localhost:3000` (or the port specified in your configuration).

### Start the Frontend Application

In a new terminal window:

```bash
cd business_frontend
npm start
```

The React application will open in your browser at `http://localhost:3000`.

**Note**: If there's a port conflict, React will automatically suggest using a different port (e.g., `http://localhost:3001`).

## 📱 Available Scripts

### Backend Scripts
- `npm start` - Start the development server with nodemon

### Frontend Scripts
- `npm start` - Start the development server
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not recommended)

## 🗄️ Database Schema

The application uses a MySQL database with the following main table:

**`information` table:**
- `infoid` - Primary key (auto-increment)
- `firstname` - Customer's first name
- `lastname` - Customer's last name
- `email` - Customer's email address
- `phone` - Customer's phone number
- `service` - Requested service
- `message` - Customer's message
- `term` - Terms acceptance

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory for sensitive configuration:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=business
PORT=3000
```

### CORS Configuration
The backend includes CORS middleware for cross-origin requests from the frontend.

## 🧪 Testing

### Backend Testing
```bash
cd business_backend
npm test
```

### Frontend Testing
```bash
cd business_frontend
npm test
```

## 📦 Production Build

### Build Frontend for Production
```bash
cd business_frontend
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy Backend
For production deployment, consider using:
- PM2 for process management
- Environment-specific configuration files
- Proper logging and monitoring

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Change the port in your configuration
   - Kill processes using the port: `npx kill-port 3000`

2. **Database Connection Failed**
   - Verify MySQL is running
   - Check database credentials
   - Ensure database exists

3. **Frontend Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for syntax errors in React components

4. **CORS Issues**
   - Verify CORS configuration in backend
   - Check frontend API endpoint URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Happy Coding! 🎉**
