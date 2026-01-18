# GitHub Setup Instructions

## Prerequisites
1. Install Git for Windows: https://git-scm.com/download/win
2. Create a GitHub account: https://github.com
3. Create a new repository on GitHub (don't initialize with README)

## Steps to Push to GitHub

### 1. Initialize Git Repository (if not already done)
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Create .gitignore File
Create a `.gitignore` file with:
```
node_modules/
.next/
.DS_Store
*.log
.env.local
.env*.local
.vercel
dist/
build/
```

### 4. Commit Changes
```bash
git commit -m "Initial commit: Convert Next.js website to static HTML/CSS/JS"
```

### 5. Add Remote Repository
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repository name:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 6. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File > Add Local Repository
4. Select this folder
5. Publish repository to GitHub

## Files to Commit
- All HTML files (index.html, services.html, service-*.html, etc.)
- CSS files (style.css, carousel.css)
- JavaScript files (js/*.js, script.js)
- Public assets (public/*)
- Configuration files (package.json, etc.)
