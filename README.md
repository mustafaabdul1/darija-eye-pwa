# Darija Eye Tracking PWA

This is a **Progressive Web App (PWA)** that uses **WebGazer.js** for eye tracking and integrates **Text-to-Speech (TTS) for Arabic Darija**.

## Features:
- **Eye Tracking**: Detects left/right gaze movement.
- **Text-to-Speech**: Converts selected text to Arabic Darija speech.
- **PWA Support**: Works offline and can be installed on mobile.

## Installation:
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/darija-eye-tracking-pwa.git
   ```
2. Navigate to the project folder:
   ```sh
   cd darija-eye-tracking-pwa
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Deployment:
### **Netlify:**
1. Push your code to **GitHub**.
2. Go to **[Netlify](https://app.netlify.com/)** → Click **"New Site from Git"**.
3. Connect your GitHub repository.
4. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
5. Click **Deploy**.

### **Vercel:**
1. Sign up on **[Vercel](https://vercel.com/)**.
2. Click **New Project** → Import from GitHub.
3. Set build command: `npm run build`, publish directory: `build`.
4. Deploy.

Enjoy 🚀!