import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1';

// Authentication
export const registerUser = (data) => axios.post(`${BASE_URL}/auth/register/user`, data);
export const registerDoctor = (data) => axios.post(`${BASE_URL}/auth/register/doctor`, data);
export const registerAdmin = (data) => axios.post(`${BASE_URL}/auth/register/admin`, data);
export const login = (data) => axios.post(`${BASE_URL}/auth/login`, data);
export const forgetPassword = (data) => axios.post(`${BASE_URL}/auth/forget-password`, data);
export const verifyResetCode = (data) => axios.post(`${BASE_URL}/auth/verify/password-reset-code`, data);
export const resetPassword = (data) => axios.post(`${BASE_URL}/auth/reset-password`, data);

// User
export const getUserByHandle = (handle) => axios.get(`${BASE_URL}/user/@${handle}`);
export const verifyDoctor = (id) => axios.patch(`${BASE_URL}/user/${id}/verify-doctor`);

// Contact Us
export const createContactMessage = (data) => axios.post(`${BASE_URL}/contact/create`, data);
export const getAllContactMessages = () => axios.get(`${BASE_URL}/contact`);

// Articles
export const createArticle = (data) => axios.post(`${BASE_URL}/article/create`, data);
export const getAllArticles = () => axios.get(`${BASE_URL}/article`);
export const getArticleById = (id) => axios.get(`${BASE_URL}/article/${id}`);
export const updateArticle = (id, data) => axios.put(`${BASE_URL}/article/${id}`, data);
export const deleteArticle = (id) => axios.delete(`${BASE_URL}/article/${id}`);

// Forum
export const createForum = (data) => axios.post(`${BASE_URL}/forum/create`, data);
export const updateForum = (id, data) => axios.put(`${BASE_URL}/forum/${id}/update`, data);
export const deleteForum = (id) => axios.delete(`${BASE_URL}/forum/${id}/delete`);
export const getForumById = (id) => axios.get(`${BASE_URL}/forum/${id}`);
export const getAllForums = () => axios.get(`${BASE_URL}/forum`);
export const addForumComment = (id, data) => axios.post(`${BASE_URL}/forum/${id}/comment`, data);

// Notifications
export const getAllNotifications = () => axios.get(`${BASE_URL}/notification`);