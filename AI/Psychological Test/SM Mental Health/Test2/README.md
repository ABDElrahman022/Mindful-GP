# Mental Health Checkup Recommendation

## Overview

This project aims to develop a machine learning model to predict whether an individual is likely to be experiencing severe mental health symptoms based on their responses to a questionnaire. The model uses Logistic Regression and is deployed using Streamlit for easy access and interaction.

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Dataset](#dataset)


## Dataset

The dataset consists of 7 demographic variables and 12 Likert scale questions measuring various aspects of mental health:

- **Demographic Variables**:
  - `Age`: Age of the participant.
  - `Sex`: Gender of the participant.
  - `Relationship Status`: Relationship status of the participant.
  - `Occupation`: Occupation status of the participant.
  - `Affiliations`: Type of organizations the participant is affiliated with.
  - `Social Media User?`: Whether the participant uses social media.
  - `Platforms Used`: Social media platforms commonly used by the participant.
  - `Time Spent`: Average time spent on social media every day.

- **Likert Scale Questions**:
  - `ADHD Q1`: How often do you find yourself using Social media without a specific purpose?
  - `ADHD Q2`: How often do you get distracted by Social media when you are busy doing something?
  - `ADHD Q3`: On a scale of 1 to 5, how easily distracted are you?
  - `ADHD Q4`: Do you find it difficult to concentrate on things?
  - `Anxiety Q1`: Do you feel restless if you haven't used Social media in a while?
  - `Anxiety Q2`: On a scale of 1 to 5, how much are you bothered by worries?
  - `Self Esteem Q1`: On a scale of 1-5, how often do you compare yourself to other successful people through the use of social media?
  - `Self Esteem Q2`: Following the previous question, how do you feel about these comparisons, generally speaking?
  - `Self Esteem Q3`: How often do you look to seek validation from features of social media?
  - `Depression Q1`: How often do you feel depressed or down?
  - `Depression Q2`: On a scale of 1 to 5, how frequently does your interest in daily activities fluctuate?
  - `Depression Q3`: On a scale of 1 to 5, how often do you face issues regarding sleep?
