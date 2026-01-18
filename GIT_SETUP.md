# Git Setup Guide

## Step 1: Install Git
1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. **Important**: Restart PowerShell/terminal after installation

## Step 2: Configure Git (First Time Only)
After installing Git, open PowerShell and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "xneshaniya@gmail.com"
```

## Step 3: Initialize Repository and Push to GitHub

### Option A: Using the PowerShell Script (Recommended)
1. Open PowerShell in your project folder
2. Run: `.\push-to-github.ps1`
3. If no remote is configured, the script will show you how to add one

### Option B: Manual Steps

#### 3.1: Initialize Git (if not already done)
```powershell
git init
```

#### 3.2: Add all files
```powershell
git add .
```

#### 3.3: Create initial commit
```powershell
git commit -m "Fix: Remove font import duplication, fix iconMap JSX issues, update copyright year, fix Image onError handler"
```

#### 3.4: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `haseeb-services-website`)
3. **Don't** initialize with README, .gitignore, or license (we already have files)

#### 3.5: Add Remote and Push
```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/haseeb-services-website.git
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Authentication
When you push, GitHub will ask for authentication:
- **Option 1**: Use GitHub Personal Access Token (recommended)
  - Go to: https://github.com/settings/tokens
  - Generate a new token with `repo` permissions
  - Use the token as your password when prompted

- **Option 2**: Use GitHub CLI (`gh auth login`)

## Troubleshooting

### Git not found after installation
- Restart PowerShell/terminal
- Check if Git is in PATH: `$env:Path -split ';' | Select-String git`

### Authentication Issues
- Use Personal Access Token instead of password
- Or set up SSH keys for easier authentication

### Remote Already Exists
If you need to change the remote URL:
```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```
