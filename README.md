##  SDE TASK 8: SUPER‑ADVANCED CODE QUALITY, AUTOMATED TESTING & CONTINUOUS INTEGRATION

## 📌 Project Overview
This project is a **Vite-powered React application** built with **TypeScript** and enhanced with a **fully automated CI/CD pipeline**. The application includes a **dark-themed interactive dashboard** that provides real-time insights.

### Key Features:
- **Automated CI/CD** via GitHub Actions 🚀
- **Comprehensive Testing** (Unit, E2E, Load Testing) ✅
- **Security & Vulnerability Scanning** 🔍
- **Interactive Dashboard** with real-time data 📊
- **Deployed on Vercel for seamless delivery** 🌍

## 🛠️ Tech Stack & Use Cases

| Technology | Purpose |
|------------|----------|
| **Vite + React + TypeScript** | Fast and modern frontend development |
| **Tailwind CSS** | Utility-first CSS framework for efficient styling |
| **Cypress** | End-to-end (E2E) testing framework for UI validation |
| **JMeter** | Load testing tool to analyze system performance under stress |
| **Snyk** | Security tool for scanning dependencies for vulnerabilities |
| **OWASP ZAP** | Web security scanner to detect potential threats |
| **GitHub Actions** | Automates testing, security scans, and deployments |
| **Vercel** | Serverless deployment platform for frontend applications |

## 🚀 Setup & Installation

1️⃣ **Clone the Repository**
```bash
git clone 
cd vit-test
```

2️⃣ **Install Dependencies**
```bash
npm install
```

3️⃣ **Start the Development Server**
```bash
npm run dev
```
Now visit **[http://localhost:5173](http://localhost:5173)** to access the application.

## 🏗️ Interactive Dashboard
The application features a **modern, interactive dashboard** with a **dark-themed UI** and **vibrant elements** for improved readability. Key functionalities include:
- **User-friendly navigation** 🧭
- **Real-time data visualization** 📊
- **Customizable widgets** ⚙️
- **Smooth performance with Vite optimizations** 🚀

## 🔍 Running Tests

### 🟢 Unit Testing
Unit tests help validate individual components and logic.
```bash
npm run test
```

### 🚀 Cypress End-to-End Tests
Cypress is used to simulate real user interactions.
#### Open Cypress UI:
```bash
npx cypress open
```
#### Run tests in headless mode:
```bash
npx cypress run
```

### 💥 Load Testing with JMeter
Apache JMeter is used to measure application performance under different loads.
#### Run Load Test:
```bash
jmeter -n -t load_test.jmx -l results.jtl
```
View results in JMeter UI for analysis.

## 🔄 CI/CD Pipeline Breakdown
This project is integrated with **GitHub Actions** for automated builds, testing, security checks, and deployments.

| Stage | Description |
|--------|-------------|
| **🏢 Build** | Installs dependencies, runs linting & security scans |
| **✅ Test** | Runs unit tests & Cypress E2E tests |
| **🔍 Security Scan** | Scans vulnerabilities using Snyk & OWASP ZAP |
| **🔥 Load Testing** | Runs JMeter load tests to analyze performance |
| **🚀 Deploy** | Deploys the app to Vercel |

CI/CD is triggered **automatically** on every push or pull request to the `main` branch.

## 🚀 Deployment
This project is deployed on **Vercel** for fast and efficient hosting.
#### Manual Deployment:
```bash
npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## 📚 Official Documentation
For more details, refer to:
- **Vite Docs**: [https://vitejs.dev/](https://vitejs.dev/)
- **Cypress Docs**: [https://docs.cypress.io/](https://docs.cypress.io/)
- **JMeter Docs**: [https://jmeter.apache.org/](https://jmeter.apache.org/)
- **GitHub Actions**: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)



