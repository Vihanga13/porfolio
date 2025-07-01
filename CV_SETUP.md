# How to Add Your Real CV

## Quick Steps:

### 1. **Create a Real PDF CV:**
   
   **Option A: Use Word/Google Docs**
   - Copy the content from `public/Vihanga_Nilusha_CV.txt`
   - Paste into Microsoft Word or Google Docs
   - Format it nicely (add sections, bold headings, etc.)
   - Save/Download as PDF
   
   **Option B: Use Online CV Builder**
   - Use Canva, Resume.com, or similar
   - Create a professional CV
   - Download as PDF

### 2. **Replace the placeholder file:**
   - Delete: `public/Vihanga_Nilusha_CV.txt`
   - Add your PDF: `public/Vihanga_Nilusha_CV.pdf`

### 3. **Update the download function:**
   In `src/pages/portfolio.tsx`, change:
   ```typescript
   // FROM:
   link.href = `${import.meta.env.BASE_URL}Vihanga_Nilusha_CV.txt`;
   link.download = 'Vihanga_Nilusha_CV.txt';
   
   // TO:
   link.href = `${import.meta.env.BASE_URL}Vihanga_Nilusha_CV.pdf`;
   link.download = 'Vihanga_Nilusha_CV.pdf';
   ```

### 4. **Redeploy:**
   ```bash
   git add .
   git commit -m "Add real PDF CV"
   git push origin main
   npm run deploy
   ```

## 🚀 **Quick Test (Current Status):**
Your CV download should work now with the text file. The URL should be:
`https://Vihanga13.github.io/porfolio/Vihanga_Nilusha_CV.txt`

## ⚡ **Pro Tip:**
Create a professional-looking PDF CV to make a better impression on potential employers!

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
