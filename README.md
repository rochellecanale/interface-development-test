# Interface Development Test

This repository contains a small interface development test project showcasing two UI components: **Gallery Block** and **Cards Block**.  
It is built using **Vite**, **JavaScript modules**, and **SCSS**.

---

### Table of Contents
- Features
- Tech Stack
- Getting Started (Local Setup)
- Folder Structure
- Local Setup

## Features

### Gallery Block  
A dynamic image gallery featuring:
- Skeleton loader while rendering items  
- Click-to-open modal view  
- Responsive layout  

### Cards Block  
A simple card grid featuring:
- Thumbnail images  
- Captions  
- Responsive layout  

---

### Tech Stack
- Vite: ^7.2.2
- ES6
- SASS: ^1.93.3

## Getting Started (Local Setup)

### Folder Structure


```plaintext
├── public/              → Static files like images
├── src/                 → Main source code
│   ├── assets/          → Fonts and Images
│   ├── components/      → Reusable UI components
│   ├── data/            → Static Data
│   ├── util/            → Utility functions
│   ├── props/           → Default placeholder values
│   ├── scss/            → SASS files
│   └── main.js          → App entry point
├── index.html           → HTML entry (used by Vite)
├── package.json         → Project metadata & scripts
├── package-lock.json    → Locked dependencies
├── vite.config.js       → Vite configuration
└── README.md            → Project overview
```

Follow the instructions below to run this project locally.

### **1. Clone the repository**
```bash
git clone https://github.com/rochellecanale/interface-development-test.git
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run Locally**
```bash
npm run dev
```

### **Important Notes**

### Production Build & Deployment Workflow

1. Create a pull request from the **feature branch** into the **staging** branch.
2. Test all changes on the **staging** environment. If everything works as expected, proceed to production deployment.
3. Create a **release branch** from `main`.
4. Open a pull request from the **feature branch** into the **release branch**, then merge.
5. Open a pull request from the **release branch** or **hotfix branch** into `main`, then merge.  
   > **Note:** Only **release** and **hotfix** branches are allowed to merge into `main`.
6. Once changes are merged to `main`, **create a new Git tag** for the release.
7. When changes are pushed to the `main` branch, **Vercel will automatically deploy** the updates to production.
