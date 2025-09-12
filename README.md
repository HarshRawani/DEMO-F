# Vybe Frontend

## 🎨 Theme  
Vybe uses a **modern dark dashboard theme** with a calming gradient background, neon-inspired accents, and high-contrast text.  
The design is consistent for both students and admins, focusing on clarity, accessibility, and a welcoming experience.

- **Background:** Radial gradient (#181f36 → #101624)  
- **Accents:** Primary (#7f5af0), Secondary (#5ddcff)  
- **Text:** Light (#e0e6f6), Muted (#a0aec0)  
- **Cards/Panels:** Rounded corners, soft shadows  
- **Charts/Analytics:** Vibrant neon palette  

👉 Global styles & variables are in `src/styles/index.css`.

---

## 🛠 UI Guidelines
- Use **[shadcn/ui](https://ui.shadcn.com/)** for buttons, modals, inputs, navigation, and other UI components.  
- Tailwind CSS for layout & utilities.  
- Always prefer shadcn components for new UI to maintain consistency.  

---

## ⚡ State & API
- Use **Redux slices** for all state management.  
- API calls must go through `axiosInstance` located in `src/config/axios.js`.  
- Keep components clean → all async logic stays in slices or services.  

---

## 📂 Notes
- Follow the folder structure for maintainability and scalability.  
- Keep the UI consistent with the dark theme and accessibility in mind.  
