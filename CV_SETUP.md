# How to Add Your Real CV

## Quick Steps:

### 1. **Add your PDF CV to the project:**
   - Place your CV file in the `public` folder
   - Name it something like: `Vihanga_Nilusha_CV.pdf`

### 2. **Update the download function:**
   Open `src/pages/portfolio.tsx` and update the CV filename:
   ```typescript
   link.href = `${import.meta.env.BASE_URL}Vihanga_Nilusha_CV.pdf`;
   link.download = 'Vihanga_Nilusha_CV.pdf';
   ```

### 3. **Redeploy:**
   ```bash
   git add .
   git commit -m "Add real CV file"
   git push origin main
   npm run deploy
   ```

## Current Status:
- ✅ Download function is now fixed for GitHub Pages
- ✅ Uses correct base URL path
- ⚠️ Currently using placeholder text file
- 📝 Replace `public/Vihanga_Nilusha_CV.txt` with your actual PDF

## File Structure:
```
public/
  ├── Vihanga_Nilusha_CV.txt  ← Replace this with your PDF
  ├── 404.html
  └── vite.svg
```

The download function now works correctly with GitHub Pages routing!
