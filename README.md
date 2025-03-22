# 🎁 Personalized Gift Recommendation Platform  

A smart web app that provides **AI-powered gift recommendations** based on recipient details like age, gender, hobbies, and occasion. Built with **React (frontend)**, **Node.js (backend)**, and **Hugging Face API**.  

---

## 🚀 Features  
- 🤖 **AI-Powered Gift Suggestions** (Hugging Face API)  
- 🎨 **Modern UI** (React & Styled Components)  
- 🌐 **Backend API** (Node.js & Express)  
- 📦 **Local Storage Support** (Saves last recommendation)  

---

## 📂 Project Structure  
```
Personalized-Gift-Recommendation/
│── backend/             # Node.js & Express Backend
│   ├── server.js        # Main backend server file
│   ├── package.json     # Backend dependencies
│   ├── .env             # API keys & environment variables
│
│── frontend/            # React Frontend
│   ├── src/             
│   │   ├── components/  # React components
│   │   │   ├── Results.js  # Displays recommendations
│   │   ├── styles/      # CSS styles
│   │   ├── App.js       # Main app file
│   │   ├── index.js     # Entry point
│   ├── package.json     # Frontend dependencies
│
│── README.md            # Project Documentation
```

---

## 🛠️ Setup & Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/Personalized-Gift-Recommendation.git
cd Personalized-Gift-Recommendation
```

### **2️⃣ Backend Setup**  
```sh
cd backend
npm install
```

- **Create `.env` file:**  
```sh
HUGGINGFACE_API_KEY=your_huggingface_api_key
PORT=5000
```

- **Run the backend server:**  
```sh
node server.js
```

### **3️⃣ Frontend Setup**  
```sh
cd ../frontend
npm install
npm start
```

The app will be available at **`http://localhost:3000/`** 🎉  

---

## 🔥 API Endpoints  
| Method | Endpoint         | Description                        |  
|--------|----------------|------------------------------------|  
| `POST` | `/api/recommend` | Generate a gift recommendation |  

### **🔹 Sample Request**  
```json
{
  "age": "30",
  "gender": "Female",
  "hobbies": "Reading",
  "occasion": "Birthday",
  "relationship": "Sister"
}
```

### **🔹 Sample Response**  
```json
{
  "recommendations": "A personalized book subscription box."
}
```


## 🤝 Contributing  
1. **Fork** this repository  
2. **Clone** the forked repo:  
   ```sh
   git clone https://github.com/Sandeepmopidevi/Personalized-Gift-Recommendation
   ```
3. **Create a new branch**:  
   ```sh
   git checkout -b feature-name
   ```
4. **Make changes & commit**:  
   ```sh
   git commit -m "Added new feature"
   ```
5. **Push to GitHub & create a PR** 🚀  

---

## 🛡️ License  
This project is licensed under the **MIT License**.  


**⭐ If you like this project, give it a star on GitHub!** 🌟  
🚀 Happy Coding! 🎁✨  
