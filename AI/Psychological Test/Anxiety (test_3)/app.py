# app.py
import streamlit as st
import pandas as pd
import numpy as np
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
import joblib

# Set page configuration
st.set_page_config(
    page_title="Social Anxiety Predictor",
    page_icon="🧠",
    layout="wide"
)

# Title and description
st.title("Social Anxiety Level Prediction")
st.write("This app predicts whether a person has high or low social anxiety based on various factors.")

# Create the form
with st.form("prediction_form"):
    st.subheader("Please fill in the following information:")

    # Create two columns for better layout
    col1, col2 = st.columns(2)

    with col1:
        # Numerical inputs
        stress_level = st.slider("Stress Level (1-10)", 1, 10, 5)
        therapy_sessions = st.number_input("Therapy Sessions per month", 0, 30, 0)
        caffeine_intake = st.number_input("Caffeine Intake (mg/day)", 0, 1000, 200)
        sleep_hours = st.number_input("Sleep Hours", 0, 24, 7)
        physical_activity = st.number_input("Physical Activity (hrs/week)", 0, 50, 3)

    with col2:
        # Occupation selection
        occupation = st.selectbox(
            "Occupation",
            [
                'Artist', 'Athlete', 'Chef', 'Doctor', 'Engineer', 
                'Freelancer', 'Lawyer', 'Musician', 'Nurse', 'Other', 
                'Scientist', 'Student', 'Teacher'
            ]
        )

    submit_button = st.form_submit_button("Predict Anxiety Level")

# Load the saved model and scaler
try:
    model = joblib.load('svm_model.joblib')
    scaler = joblib.load('scaler.joblib')
except:
    st.error("Error: Model files not found. Please ensure the model is trained and saved.")
    st.stop()

if submit_button:
    # Create occupation columns (one-hot encoding)
    occupation_columns = [
        'Occupation_Artist', 'Occupation_Athlete', 'Occupation_Chef',
        'Occupation_Doctor', 'Occupation_Engineer', 'Occupation_Freelancer',
        'Occupation_Lawyer', 'Occupation_Musician', 'Occupation_Nurse',
        'Occupation_Other', 'Occupation_Scientist', 'Occupation_Student',
        'Occupation_Teacher'
    ]
    
    # Initialize occupation values
    occupation_values = [0] * len(occupation_columns)
    occupation_index = occupation_columns.index(f'Occupation_{occupation}')
    occupation_values[occupation_index] = 1

    # Combine all features
    features = [
        stress_level,
        therapy_sessions,
        caffeine_intake,
        sleep_hours,
        physical_activity
    ] + occupation_values

    # Convert to numpy array and reshape
    features_array = np.array(features).reshape(1, -1)
    
    # Scale the features
    features_scaled = scaler.transform(features_array)
    
    # Make prediction
    prediction = model.predict(features_scaled)
    
    # Display result
    st.subheader("Prediction Result:")
    if prediction[0] == 0:
        st.success("Low Social Anxiety Level")
    else:
        st.error("High Social Anxiety Level")
    
    # Display confidence scores if available
    try:
        probability = model.predict_proba(features_scaled)
        st.write("Confidence Scores:")
        st.write(f"Low Anxiety: {probability[0][0]:.2%}")
        st.write(f"High Anxiety: {probability[0][1]:.2%}")
    except:
        st.write("Note: Probability scores not available for this model type.")

# Add some helpful information
st.markdown("""
---
### About this predictor:
This tool uses a Support Vector Machine (SVM) model trained on social anxiety data to predict anxiety levels. 
The prediction is based on various lifestyle factors and personal characteristics.

**Note:** This is a demonstration tool and should not be used as a substitute for professional medical advice.
""")
