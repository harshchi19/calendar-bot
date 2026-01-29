# 📅 Legal Schedule Manager (Calendar Bot)

A modern web application designed for legal professionals to manage court appointments and receive WhatsApp reminders. Built with React, TypeScript, and Express, this application helps lawyers stay organized with their court schedules and case management.

## ✨ Features

- **📆 Interactive Calendar**: Visual calendar interface to view and select dates for appointments
- **➕ Appointment Management**: Add and manage court appointments with detailed information
- **📱 WhatsApp Reminders**: Send appointment schedules directly to WhatsApp via Twilio
- **📊 Weekly Schedule View**: Comprehensive weekly overview of all scheduled appointments
- **💾 Local Storage**: Persistent storage of appointments in the browser
- **🎨 Modern UI**: Clean, responsive interface built with TailwindCSS
- **🔔 Toast Notifications**: Real-time feedback for user actions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **date-fns** - Date manipulation library
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Express** - Node.js web framework
- **Twilio** - WhatsApp messaging API
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Twilio Account** with WhatsApp sandbox access

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshchi19/calendar-bot.git
   cd calendar-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Twilio credentials**
   
   Update the following values in `server/index.js`:
   ```javascript
   const TWILIO_ACCOUNT_SID = 'your_account_sid';
   const TWILIO_AUTH_TOKEN = 'your_auth_token';
   const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Twilio sandbox number
   const USER_PHONE_NUMBER = 'whatsapp:+your_phone_number'; // Your WhatsApp number
   ```

   **Note**: For production use, consider moving these to environment variables using a `.env` file.

## 🎯 Usage

### Development Mode

Start both the frontend and backend servers concurrently:
```bash
npm run dev
```

This will start:
- Frontend: `http://localhost:5173` (Vite dev server)
- Backend: `http://localhost:3000` (Express server)

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📖 How to Use

1. **Select a Date**: Click on any date in the calendar to schedule a new appointment
2. **Fill Appointment Details**:
   - Court Name
   - Location
   - Case Number
   - Case Title
   - Time
   - Description (optional)
3. **Save Appointment**: Submit the form to save the appointment
4. **View Schedule**: See all your appointments in the weekly schedule view
5. **Send Reminders**: Click the "Send to WhatsApp" button to receive your schedule via WhatsApp

## 📁 Project Structure

```
calendar-bot/
├── src/
│   ├── components/          # React components
│   │   ├── AppointmentForm.tsx
│   │   ├── Calendar.tsx
│   │   └── WeeklySchedule.tsx
│   ├── utils/              # Utility functions
│   │   ├── api.ts          # API calls
│   │   └── storage.ts      # Local storage management
│   ├── types.ts            # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── server/
│   └── index.js            # Express server & Twilio integration
├── public/                 # Static assets
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # TailwindCSS configuration
```

## 🔧 Configuration

### Twilio WhatsApp Setup

1. Create a [Twilio account](https://www.twilio.com/try-twilio)
2. Access the [WhatsApp Sandbox](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn)
3. Follow instructions to connect your WhatsApp number
4. Copy your Account SID and Auth Token from the Twilio Console
5. Update the credentials in `server/index.js`

### Environment Variables (Recommended)

For better security, use environment variables:

1. Create a `.env` file in the `server` directory:
   ```env
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
   USER_PHONE_NUMBER=whatsapp:+your_phone_number
   PORT=3000
   ```

2. Update `server/index.js` to use environment variables:
   ```javascript
   import dotenv from 'dotenv';
   dotenv.config();
   
   const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
   const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
   // ... etc
   ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harsh Chi**
- GitHub: [@harshchi19](https://github.com/harshchi19)

## 🙏 Acknowledgments

- [Twilio](https://www.twilio.com/) for WhatsApp messaging API
- [React](https://reactjs.org/) for the amazing UI library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- All other open-source libraries used in this project

## 📞 Support

If you have any questions or issues, please open an issue in the GitHub repository.

---

Made with ❤️ for legal professionals
