# 🧠 MindFul – Mental Health Support Platform

A culturally relevant, AI-powered mental health platform tailored for Egyptians. Developed as a graduation project at the **Egyptian E-Learning University (EELU)**, *MindFul* aims to combat stigma, provide personalized support, and bridge the gap between users and professional mental health care through cutting-edge technology.

---

## 📚 Abstract

Mental health is a pressing concern globally, with 1 in 8 people experiencing related disorders. In Egypt, stigma, limited access to care, and lack of centralized resources create significant barriers. **MindFul** is an intelligent web platform offering:
- AI-powered psychological assessments
- An empathetic RAG-based chatbot
- A community-driven stories section
- Doctor-approved articles
- A therapist directory

It brings mental health support that is accessible, personalized, and culturally relevant.

---

## ✨ Key Features

### 👤 Account Types
- **User**: Can take tests, use chatbot, view/post stories.
- **Doctor**: Can post verified articles and contribute medical content.
- **Admin**: Manages content, approvals, and user roles.

### 🧠 AI Modules
- **Psychological Tests**:
  - Panic Disorder Detection → XGBoost (97.62%)
  - Social Media Mental Health → Logistic Regression (98%)
  - Anxiety Prediction → SVM (93.45%)
- **Chatbot**:
  - RAG-based with **Mixtral-8x7B-Instruct-v0.1**
  - Trained on mental health counseling conversations

### 📰 Content & Community
- **Stories Section**: User-driven storytelling to reduce stigma.
- **Articles**: Doctor-published, approved mental health knowledge.
- **Therapist Directory**: Profiles, availability, and contact info.
- **Positive Notifications**: Automated mental wellness messages.

---

## 🏗️ Tech Stack

**Frontend**:
- React.js, HTML5, CSS3, JavaScript, Bootstrap

**Backend**:
- Node.js, Express.js, MongoDB

**AI & Tools**:
- Python, scikit-learn, XGBoost, SVM, Logistic Regression
- RAG architecture using Pinecone + Mixtral
- Hugging Face, Streamlit
- Git, Postman, Figma, VS Code

---

## 📁 Datasets Used

- [Panic Disorder Detection Dataset](https://www.kaggle.com/datasets/muhammadshahidazeem/panic-disorder-detection-dataset)  
  Contains clinical records used for training and evaluating the panic disorder prediction model.

- [Social Media and Mental Health Dataset](https://www.kaggle.com/datasets/souvikahmed071/social-media-and-mental-health)  
  Used for evaluating the effect of social media on mental health using logistic regression.

- [Social Anxiety Dataset](https://www.kaggle.com/datasets/natezhang123/social-anxiety-dataset)  
  Used to train and evaluate anxiety level predictions with SVM.

- [Mental Health Counseling Conversations](https://huggingface.co/datasets/Amod/mental_health_counseling_conversations)  
  A corpus of anonymized therapist-client conversations used for fine-tuning the chatbot.

---

## 🧪 Testing & Evaluation

- ✅ **Unit Testing**: Individual testing of frontend components, backend APIs, and machine learning models.
- 🔄 **Integration Testing**: Verifies seamless interaction between frontend, backend, chatbot, and AI modules.
- 🚀 **Performance Testing**: Ensures fast response times, accurate AI predictions, and smooth user interface.
- 🔒 **Security Testing**: Validates secure handling of user data using server-side validation, `.env` secrets, and CORS configuration.

---

## 📈 Future Enhancements

- 📱 **Mobile Application**: Android/iOS app for on-the-go access.
- 🗣️ **Voice Interaction**: Voice-enabled chatbot for better accessibility.
- 🤖 **Advanced AI Recommendations**: Deliver personalized content and strategies based on user data and behavior.


---

## 👨‍🎓 Team Members

### Graduation Team – Egyptian E-Learning University (EELU)

- **Abdelrahman Mohamed Mohamed**
- **Sama Yasser Gemeaey**
- **Seham Samy Ebrahim**
- **Waleed Khaled Edrees**
- **Mohamed Ayman Fouad**
- **Mohamed Ayman Elkhawas**
- **Mohamed Ashraf Mohamed**

### Supervised by

- **Dr. Rodaina Abdelsalam**  
  *Project Supervisor*

- **Eng. Martina Girgis**  
  *Assistant Supervisor*

---
## 📜 License

This project is **not open source** and is intended solely for academic and internal use by the authors.  
All rights are reserved © 2025.  
No part of this project may be copied, distributed, or reused without explicit written permission from the project team.
