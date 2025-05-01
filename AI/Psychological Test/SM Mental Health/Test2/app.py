import streamlit as st
import pandas as pd
import joblib

# Load the saved model
model = joblib.load('logistic_regression_model.pkl')

# Define the mapping functions
def map_gender(gender):
    gender_mapping = {
        'Male': 0,
        'Female': 1,
        'Other': 2
    }
    return gender_mapping.get(gender, 2)

def map_time_spent(time_spent):
    time_spent_mapping = {
        'Less than an Hour': 0,
        'Between 1 and 2 hours': 1,
        'Between 2 and 3 hours': 2,
        'Between 3 and 4 hours': 3,
        'Between 4 and 5 hours': 4,
        'More than 5 hours': 5
    }
    return time_spent_mapping.get(time_spent, -1)

def map_self_esteem_q2(score):
    self_esteem_q2_mapping = {
        1: 4,
        2: 2,
        3: 0,
        4: 0,
        5: 0
    }
    return self_esteem_q2_mapping.get(score, 0)
sex_map = {'Male': 0, 'Female': 1, 'Other': 2}

# Streamlit app
st.title('Mental Health Checkup Recommendation')

# Input fields
age = st.number_input('Age', min_value=0, max_value=120, value=30)
sex = st.selectbox('Gender',['Male','Female','Other'])
time_spent = st.selectbox('Average Time Spent on Social Media per Day', ['Less than an Hour', 'Between 1 and 2 hours', 'Between 2 and 3 hours', 'Between 3 and 4 hours', 'Between 4 and 5 hours', 'More than 5 hours'])
adhd_q1 = st.number_input('How often do you find yourself using Social media without a specific purpose? (1-5)', min_value=1, max_value=5, value=3)
adhd_q2 = st.number_input('How often do you get distracted by Social media when you are busy doing something? (1-5)', min_value=1, max_value=5, value=3)
adhd_q3 = st.number_input('How easily distracted are you? (1-5)', min_value=1, max_value=5, value=3)
adhd_q4 = st.number_input('Do you find it difficult to concentrate on things? (1-5)', min_value=1, max_value=5, value=3)
anxiety_q1 = st.number_input("Do you feel restless if you haven't used Social media in a while? (1-5)", min_value=1, max_value=5, value=3)
anxiety_q2 = st.number_input('How much are you bothered by worries? (1-5)', min_value=1, max_value=5, value=3)
self_esteem_q1 = st.number_input('How often do you compare yourself to other successful people through the use of social media? (1-5)', min_value=1, max_value=5, value=3)
self_esteem_q2 = st.number_input('Following the previous question, how do you feel about these comparisons, generally speaking? (1-5)', min_value=1, max_value=5, value=3)
self_esteem_q3 = st.number_input('How often do you look to seek validation from features of social media? (1-5)', min_value=1, max_value=5, value=3)
depression_q1 = st.number_input('How often do you feel depressed or down? (1-5)', min_value=1, max_value=5, value=3)
depression_q2 = st.number_input('How frequently does your interest in daily activities fluctuate? (1-5)', min_value=1, max_value=5, value=3)
depression_q3 = st.number_input('How often do you face issues regarding sleep? (1-5)', min_value=1, max_value=5, value=3)

# Calculate scores
adhd_score = adhd_q1 + adhd_q2 + adhd_q3 + adhd_q4
anxiety_score = anxiety_q1 + anxiety_q2
self_esteem_score = self_esteem_q1 + map_self_esteem_q2(self_esteem_q2) + self_esteem_q3
depression_score = depression_q1 + depression_q2 + depression_q3

# Preprocess input data
input_data = {
    'Age': age,
    'Sex': sex_map[sex],
    'Time Spent': map_time_spent(time_spent),
    'ADHD Score': adhd_score,
    'Anxiety Score': anxiety_score,
    'Self Esteem Score': self_esteem_score,
    'Depression Score': depression_score
}

# Create a DataFrame from the input data
processed_data = pd.DataFrame([input_data])

# Ensure the feature names match exactly
required_columns = [
    'Age',
    'Sex',
    'Time Spent',
    'ADHD Score',
    'Anxiety Score',
    'Self Esteem Score',
    'Depression Score'
]

# Add missing columns with default values if necessary
for col in required_columns:
    if col not in processed_data.columns:
        processed_data[col] = 0

# Reorder columns to match the training data
processed_data = processed_data[required_columns]

# Make prediction
if st.button('Predict'):
    prediction = model.predict(processed_data)
    if prediction[0] == 1:
        st.success('Based on your responses, you are recommended to get a mental health checkup.')
    else:
        st.info('Based on your responses, you are not currently recommended to get a mental health checkup.')