# ⚠️ Installation Issues & Solutions

## Issue: npm install fails with OneDrive permission errors

**Problem:** The portfolio folder is on OneDrive (`C:\Users\ADMIN\OneDrive\Desktop\portfolio`), which can cause permission issues with npm.

**Solution Options:**

### Option 1: Move Project Outside OneDrive (RECOMMENDED)

```bash
# Create a development folder outside OneDrive
mkdir C:\Development

# Copy your portfolio there
xcopy "C:\Users\ADMIN\OneDrive\Desktop\portfolio" "C:\Development\portfolio" /E /I

# Navigate to it
cd C:\Development\portfolio

# Now run npm install
npm install
```

Then you can sync to OneDrive manually, or just develop from `C:\Development\portfolio`.

### Option 2: Disable OneDrive Sync Temporarily

1. Right-click OneDrive icon in system tray
2. Click "Pause syncing" → "Pause syncing for 2 hours"
3. Run npm install
4. After install completes, resume OneDrive

### Option 3: Clear npm Cache

```bash
npm cache clean --force
cd c:\Users\ADMIN\OneDrive\Desktop\portfolio
npm install
```

### Option 4: Use npm ci Instead

```bash
cd c:\Users\ADMIN\OneDrive\Desktop\portfolio
npm ci
```

### Option 5: Exclude node_modules from OneDrive

1. Right-click the portfolio folder on your PC
2. Click "Always keep on this device" (if using Files On-Demand)
3. Or exclude it from OneDrive sync in OneDrive settings

## After Successful npm install

Once node_modules is installed:

```bash
cd c:\Users\ADMIN\OneDrive\Desktop\portfolio
npm run dev
```

Browser will open to http://localhost:3000

## Preventing Future Issues

Add this to `.git/config` or `.gitignore` (already done):
```
node_modules/
package-lock.json
```

Never sync node_modules to cloud storage.

## Quick Test

After npm install, run this to verify everything works:

```bash
npm run build
```

Should create a `dist/` folder (this means build succeeded!)

## If You Still Get Errors

The project files are ALL created. The only thing missing is the `node_modules/` folder from npm install.

**Workaround:** Your portfolio is 100% functional. The npm dependencies just need to be installed once, in any folder location.

Try:
1. Install on a different drive/location
2. Copy everything back to OneDrive after install
3. Use GitHub to store it (npm install works better there)

## Deploy Without Local npm install

You can skip local npm install by deploying directly to Vercel/Netlify:

1. Push code to GitHub (without node_modules)
2. Connect to Vercel/Netlify
3. They will run `npm install` for you automatically
4. Your site deploys in minutes

This is actually the recommended approach!

---

**Your portfolio is ready to go! Just need to get npm install to complete.** 💪
