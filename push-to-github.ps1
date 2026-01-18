# PowerShell script to push to GitHub
# Make sure Git is installed first: https://git-scm.com/download/win

Write-Host "GitHub Push Script" -ForegroundColor Green
Write-Host "===================" -ForegroundColor Green
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installing Git, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if .git exists
if (Test-Path ".git") {
    Write-Host "Git repository already initialized" -ForegroundColor Green
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "Git repository initialized" -ForegroundColor Green
}

# Add all files
Write-Host ""
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Files staged for commit" -ForegroundColor Green
    
    # Commit
    Write-Host ""
    Write-Host "Creating commit..." -ForegroundColor Yellow
    $commitMessage = "Fix: Remove font import duplication, fix iconMap JSX issues, update copyright year, fix Image onError handler"
    git commit -m $commitMessage
    Write-Host "Commit created successfully" -ForegroundColor Green
    
    # Check for remote
    $remote = git remote -v
    if ($remote) {
        Write-Host ""
        Write-Host "Remote repository found:" -ForegroundColor Green
        Write-Host $remote
        
        Write-Host ""
        Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
        git branch -M main
        git push -u origin main
        Write-Host ""
        Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "No remote repository configured" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "To add a remote repository, run:" -ForegroundColor Cyan
        Write-Host "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor White
        Write-Host ""
        Write-Host "Then push with:" -ForegroundColor Cyan
        Write-Host "  git branch -M main" -ForegroundColor White
        Write-Host "  git push -u origin main" -ForegroundColor White
    }
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
    Write-Host "All files are already committed" -ForegroundColor Green
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
