<div align="center">

# 🎯 PrepAi - AI-Powered Interview Preparation Platform

### _Master Your Interviews with Artificial Intelligence_

![Node.js](https://img.shields.io/badge/Node.js-v24.4.0-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-v4.21.2-blue?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-Google_Gemini-blueviolet?style=for-the-badge&logo=google)

[Features](#-key-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

---

</div>

## 📖 Overview

**PrepAi** is a cutting-edge, AI-powered interview preparation platform that revolutionizes how students and professionals prepare for technical interviews. Built with modern web technologies and powered by Google's Gemini AI, PrepAi creates realistic, personalized interview experiences tailored to your resume, target company, and specific interview rounds.

### 🎯 Why PrepAi?

- 🤖 **AI-Driven Question Generation** - Questions based on YOUR resume and job description
- 🎙️ **Voice-Enabled Interface** - Realistic interview simulation with speech recognition
- 📊 **Intelligent Feedback** - Detailed evaluation and improvement recommendations
- 🏢 **Company-Specific Preparation** - Organize interviews by company "Spaces"
- 📧 **Automated Workflow** - Email notifications with session codes
- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations

---

## ✨ Key Features

### 🔐 Smart Session Management
- **Quick Sign-In** - Get started with just your name and email
- **Session Codes** - Unique 8-character codes sent to your email
- **Persistent Sessions** - Resume your preparation anytime with your code
- **Profile Dashboard** - Track all your interview spaces in one place

### 🏢 Interview Spaces
Create dedicated preparation spaces for each company:
- 🏢 **Company Details** - Name, position, job description
- 📂 **Resume Upload** - PDF/DOC support with AI summarization
- 🎯 **Multiple Rounds** - Technical, HR, Aptitude, Behavioral, and more
- 📈 **Progress Tracking** - Monitor your preparation journey

### 🤖 AI-Powered Intelligence
Leveraging Google Gemini AI for:
- **Resume Analysis** - Extracts key skills and experiences
- **Question Generation** - Industry-relevant, role-specific questions
- **Speech Synthesis** - AI reads questions aloud for realistic practice
- **Answer Evaluation** - Comprehensive feedback and scoring
- **Improvement Insights** - Personalized recommendations

### 🎤 Interactive Interview Experience
- **Voice Input** - Answer questions using speech recognition
- **Text Editing** - Review and refine your responses before submission
- **Real-Time Transcription** - See your answers as you speak
- **Multiple Attempts** - Practice until you're confident

### 📊 Detailed Analytics & Feedback
Post-interview AI-generated reports include:
- 📄 **Interview Summary** - Overview of your performance
- 🏆 **Key Takeaways** - What you did well
- 📈 **Evaluation Metrics** - Structured scoring across dimensions
- 💡 **Improvement Areas** - Specific recommendations for growth
- 🎯 **Best Practices** - Tips for future interviews

---

## 🛠️ Tech Stack

<table>
<tr>
<td>

**Frontend**
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🌊 **GSAP & ScrollTrigger** - Smooth animations
- 🎭 **Three.js** - 3D graphics and effects
- 🎙️ **Web Speech API** - Voice recognition
- 📝 **EJS Templating** - Dynamic server-side rendering

</td>
<td>

**Backend**
- 🖥️ **Node.js v24.4.0** - JavaScript runtime
- 🚀 **Express.js v4.21.2** - Web application framework
- 🗄️ **MongoDB Atlas** - Cloud database
- 🍪 **Cookie-Session** - Secure session management
- 📧 **Nodemailer** - Email delivery system

</td>
</tr>
<tr>
<td colspan="2" align="center">

**AI & Integrations**
- 🤖 **Google Gemini API** (gemini-flash-latest) - Question generation & evaluation
- 🎙️ **Text-to-Speech** - AI voice synthesis
- 📄 **PDF Parser** - Resume text extraction

</td>
</tr>
</table>

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
Node.js v24.4.0 or higher
MongoDB (Local or Atlas)
Git
```

### Step-by-Step Setup

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/prepai.git
cd prepai
```

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Configure Environment Variables**

Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/prepai?retryWrites=true&w=majority

# Session Configuration
SESSION_SECRET=your-super-secret-session-key-here

# Gmail SMTP (for sending session codes)
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-specific-password

# Google Gemini AI
GEMINI_API_KEY=your-gemini-api-key-here

# Server Port
PORT=3000
```

4️⃣ **Set Up Google Gemini API**

- Visit [Google AI Studio](https://aistudio.google.com/)
- Create a new project or select existing
- Navigate to API Keys section
- Generate a new API key
- Copy the key to your `.env` file

5️⃣ **Configure Gmail SMTP**

- Go to your Google Account settings
- Enable 2-Factor Authentication
- Generate an [App Password](https://myaccount.google.com/apppasswords)
- Use the 16-character password in your `.env` file

6️⃣ **Start the Development Server**

```bash
npm run dev
```

7️⃣ **Access the Application**

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
prepai/
├── 📂 public/                    # Static assets
│   ├── gen.svg                   # Logo
│   ├── gen2.svg                  # Favicon
│   └── ...
├── 📂 src/
│   ├── 📂 config/                # Configuration files
│   │   ├── dbConfig.js           # MongoDB connection
│   │   └── email.js              # Email configuration
│   ├── 📂 controllers/           # Request handlers
│   │   ├── homeController.js
│   │   ├── sessionController.js
│   │   ├── spaceController.js
│   │   └── interviewController.js
│   ├── 📂 models/                # MongoDB schemas
│   │   ├── sessionModel.js       # User sessions
│   │   ├── spaceModel.js         # Interview spaces
│   │   ├── studentModel.js       # Student data
│   │   └── questionAnswerModel.js
│   ├── 📂 services/              # Business logic
│   │   └── geminiService.js      # AI integration
│   ├── 📂 views/                 # EJS templates
│   │   ├── home.ejs
│   │   ├── welcome.ejs
│   │   └── 📂 student/
│   ├── app.js                    # Express app configuration
│   └── routes.js                 # Route definitions
├── server.js                     # Entry point
├── package.json                  # Dependencies
├── .env                          # Environment variables
└── README.md                     # This file
```

---

## 🎬 Demo

### 🖼️ Screenshots

<div align="center">

| Landing Page | Sign-In Interface |
|:---:|:---:|
| Beautiful gradient hero with animations | Quick session creation with email |

| Dashboard | Interview Space |
|:---:|:---:|
| Manage all your company spaces | Detailed space with interview rounds |

| Interview Screen | AI Feedback Report |
|:---:|:---:|
| Voice-enabled question interface | Comprehensive performance analysis |

</div>

### 🎥 Video Demo

> 📹 [Watch Full Demo on YouTube](https://your-demo-video-link.com)

---

## 🔄 How It Works

### Workflow Diagram

```
┌─────────────────┐
│  1. Sign In     │  Enter name & email → Receive session code via email
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. Dashboard   │  View all your interview preparation spaces
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. Create      │  Company name, job description, position
│     Space       │  Upload resume → AI summarization
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. Add Rounds  │  Technical, HR, Aptitude, Behavioral, etc.
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  5. Start       │  AI generates questions based on:
│     Interview   │  • Your resume
│                 │  • Job description
│                 │  • Interview round type
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. Answer      │  🎤 Voice input or text
│     Questions   │  ✏️ Edit before submission
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  7. Get         │  📊 Performance metrics
│     Feedback    │  💡 Improvement suggestions
│                 │  🏆 Best practices
└─────────────────┘
```

---

## 📧 Email System

PrepAi includes an automated email system that sends:

- ✅ **Welcome Emails** - Session code delivery upon sign-up
- 🔐 **Code Resend** - Retrieve your session code from profile page
- 🎨 **Beautiful Templates** - Gradient-styled HTML emails

### Sample Email

```
┌─────────────────────────────────────┐
│  🎯 Welcome to PrepAi!              │
│                                     │
│  Hello [Name],                      │
│                                     │
│  Your session has been created!     │
│                                     │
│  Your Session Code:                 │
│  ┌─────────────┐                   │
│  │   AB12CD34   │                   │
│  └─────────────┘                   │
│                                     │
│  Keep this code safe to access      │
│  your dashboard anytime.            │
└─────────────────────────────────────┘
```

---

## 🎨 UI/UX Highlights

### Design System

- **Color Palette**: Indigo to Cyan gradient (#6366f1 → #06b6d4)
- **Typography**: Inter, DM Sans fonts for modern readability
- **Icons**: Font Awesome 6.4.0 for consistent iconography
- **Animations**: GSAP-powered smooth transitions
- **Responsive**: Mobile-first design approach

### Key UI Components

- ✨ Gradient card designs with hover effects
- 🎭 Animated modals with backdrop blur
- 📊 Progress indicators and status badges
- 🎨 Glassmorphism effects on key elements
- 🌊 Smooth scroll animations

---

## 🔒 Security Features

- 🍪 **Secure Sessions** - HTTP-only cookies with 30-day expiry
- 🔐 **Unique Session IDs** - 8-character hex codes
- 🔒 **Environment Variables** - Sensitive data in `.env` file
- ✉️ **Email Verification** - Code delivery to registered email
- 🛡️ **Input Validation** - Server-side data sanitization

---

## 🚀 Future Enhancements

### Planned Features

- [ ] 🧠 **Custom AI Model** - Train on real interview data from FAANG companies
- [ ] 📱 **Mobile App** - React Native iOS/Android applications
- [ ] 🌙 **Dark Mode** - System-aware theme switching
- [ ] 👥 **Peer Mock Interviews** - Connect with other users
- [ ] 📹 **Video Recording** - Record and review your interview performance
- [ ] 🏆 **Gamification** - Badges, streaks, and leaderboards
- [ ] 🌍 **Multi-Language** - Support for non-English interviews
- [ ] 📊 **Advanced Analytics** - Detailed performance tracking over time
- [ ] 🔗 **LinkedIn Integration** - Import resume directly from LinkedIn
- [ ] ☁️ **Cloud Deployment** - AWS/Azure deployment with CDN

---

## 🤝 Contributing

We welcome contributions from the community! PrepAi is **open-source forever**.

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/yourusername/prepai.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Add new features
   - Fix bugs
   - Improve documentation
   - Enhance UI/UX

4. **Commit with Meaningful Messages**
   ```bash
   git commit -m "feat: Add voice feedback feature"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Submit a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

### Contribution Ideas

- 🎨 **Design**: Improve UI/UX, add animations, create themes
- 🧠 **AI/ML**: Enhance question generation, improve evaluation algorithms
- 🗄️ **Backend**: Optimize database queries, add caching, improve performance
- 📱 **Frontend**: Add new features, fix responsiveness, improve accessibility
- 📚 **Documentation**: Write tutorials, create video guides, translate docs
- 🐛 **Bug Fixes**: Report and fix issues
- 🧪 **Testing**: Add unit tests, integration tests, E2E tests

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 PrepAi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 👨‍💻 Author

<div align="center">

**Developed with ❤️ by the PrepAi Team**

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourprofile)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:ayushoffinfo17@gmail.com)

</div>

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful AI capabilities
- **MongoDB Atlas** - For reliable cloud database hosting
- **Vercel/Render** - For hosting recommendations
- **Open Source Community** - For amazing tools and libraries

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/prepai?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/prepai?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/prepai)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/prepai)

---

## 💬 Support

Need help? Have questions?

- 📧 **Email**: ayushoffinfo17@gmail.com
- 💬 **Issues**: [GitHub Issues](https://github.com/yourusername/prepai/issues)
- 📖 **Docs**: [Documentation](https://github.com/yourusername/prepai/wiki)

---

<div align="center">

### 🎉 **Star this repo if you found it helpful!** ⭐

### _Good luck with your interviews! You've got this! 🚀_

---

**Made with 💙 and ☕ by developers, for developers**

</div>

