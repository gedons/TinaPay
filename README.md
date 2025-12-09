# TinaPay – Modern Payment Solutions

![TinaPay Logo](TINAPAY4.png)

> **Secure. Fast. Reliable.**  
> The next-generation payment gateway designed for modern businesses.

**TinaPay** is a cutting-edge financial technology platform enabling businesses to accept payments instantly, manage multi-currency transactions, and ensure bank-grade security for their customers. Built with performance and user experience at its core, TinaPay provides the tools you need to scale globally.

---

## 🚀 Key Features

*   **Global Payments**: Accept payments from anywhere in the world with seamless multi-currency support.
*   **Instant Payouts**: fast and reliable settlement of funds to keep your business moving.
*   **Bank-Grade Security**:
    *   **Encryption**: AES-256 encryption for data at rest and TLS 1.2+ for all transit data.
    *   **Compliance**: Fully PCI DSS Level 1 compliant.
    *   **Fraud Prevention**: Advanced machine learning algorithms for real-time transaction monitoring and risk assessment.
    *   **Access Control**: Role-Based Access Control (RBAC) and 2FA for account security.
*   **Modern Dashboard**: Intuitive interface for tracking transactions, refunds, and analytics.

## 🛠️ Technology Stack

This project is built using the latest web technologies to ensure speed, scalability, and developer experience:

*   **Framework**: [Nuxt 3](https://nuxt.com)
*   **UI Library**: [Vue 3](https://vuejs.org)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com)
*   **Components**: [Naive UI](https://www.naiveui.com/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Font**: [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   **Node.js**: v18.0.0 or higher
*   **npm** or **pnpm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/gedons/tinapay.git
    cd tinapay
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:3000` to view the application.

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server in watch mode with HMR. |
| `npm run build` | Builds the application for production. |
| `npm run generate` | Generates a static version of the site. |
| `npm run preview` | Starts a local server to preview the production build. |

## 📂 Project Structure

```bash
tinapay/
├── .nuxt/               # Nuxt auto-generated files
├── assets/              # Global assets (CSS, images)
├── components/          # reusable Vue components
├── composables/         # Auto-imported Vue composables
├── layouts/             # Page layouts
├── pages/               # Application routes
│   ├── index.vue        # Home page
│   ├── security.vue     # Security information
│   ├── privacy.vue      # Privacy policy
│   └── terms.vue        # Terms of service
├── public/              # Static files served at root
├── app.vue              # Main application entry point
├── nuxt.config.ts       # Nuxt configuration
└── tailwind.config.js   # Tailwind configuration
```

## 🔒 Security

We take security seriously. If you find any vulnerabilities, please report them immediately to [security@tinapay.com](mailto:security@tinapay.com).

*   **PCI DSS Level 1 Compliant**
*   **AES-256 Encryption**
*   **24/7 Fraud Monitoring**

## 📄 License

Proprietary Software. All rights reserved.
Copyright © 2025 TinaPay.
