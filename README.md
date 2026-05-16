# Manny Owoloye — DevOps Portfolio

A modern DevOps portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and GitHub Actions.

The portfolio showcases cloud engineering, DevOps automation, Infrastructure as Code, CI/CD pipelines, containerization, and deployment projects.

---

# Live Portfolio

https://YOUR-VERCEL-URL.vercel.app

---

# Features

- Modern animated UI
- Responsive multi-page layout
- DevOps-focused project showcase
- Resume download
- Docker Hub integration
- GitHub repository links
- CI/CD deployment pipeline
- GitHub Actions automation
- Vercel deployment
- Tailwind CSS styling
- Framer Motion animations
- Mobile responsive navigation

---

# Technologies Used

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM

## DevOps & Cloud

- AWS
- Terraform
- Jenkins
- Docker
- Kubernetes
- GitHub Actions
- Linux
- Docker Hub
- Vercel

---

# Portfolio Sections

- Home
- About
- Projects
- Skills
- Resume
- Contact

---

# Featured Projects

## Terraform AWS Infrastructure

Provisioned AWS infrastructure using Terraform with reusable modules, EC2 provisioning, networking, and security groups.

Repository:
https://github.com/owotee/terraform-aws-iac

---

## Jenkins CI/CD Pipelines

Created Jenkins pipelines for infrastructure provisioning and multi-language application deployment.

Repository:
https://github.com/owotee/terraform-aws-iac

---

## Dockerized Five Web Applications

Built Docker images for Python, Node.js, PHP, Ruby, and Java applications and pushed them to Docker Hub.

Repository:
https://github.com/owotee/multi-language-webapps

Docker Hub:
https://hub.docker.com/u/owotee

---

## DevOps Portfolio Deployment

Built and deployed a React-based DevOps portfolio using GitHub Actions and Vercel.

Repository:
https://github.com/owotee/devops-portfolio

---

# Local Development Setup

## Clone Repository

```bash
git clone https://github.com/owotee/devops-portfolio.git
cd devops-portfolio
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# Production Build

```bash
npm run build
```

---

# GitHub Actions CI/CD

This project uses GitHub Actions to:

- Install dependencies
- Build the React application
- Build Docker images
- Push Docker images to Docker Hub
- Deploy automatically to Vercel

Workflow file:

```text
.github/workflows/deploy-vercel.yml
```

---

# Deployment

The application is deployed on Vercel.

Every push to the `main` branch automatically triggers deployment using GitHub Actions.

---

# Environment Secrets

GitHub repository secrets used:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

---

# Contact

## Manny Owoloye

- Email: eowoloye2@gmail.com
- GitHub: https://github.com/owotee
- Docker Hub: https://hub.docker.com/u/owotee

---

# License

This project is open source and available under the MIT License.