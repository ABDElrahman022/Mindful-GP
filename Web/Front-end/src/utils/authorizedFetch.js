// دالة لقراءة التوكن من localStorage
function getToken() {
    return localStorage.getItem("token");
}

// دالة لتخزين التوكن في localStorage
function setToken(token) {
    localStorage.setItem("token", token);
}

// دالة تغلف fetch وتضيف التوكن تلقائيًا
async function authorizedFetch(url, options = {}) {
    const token = getToken();

    if (!token) {
        throw new Error("You must be logged in to perform this action.");
    }

    const headers = {
        ...(options.headers || {}),
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const response = await fetch(url, {
        ...options,
        headers
    });

    return response;
}

// دوال مساعدة جاهزة
export const postWithAuth = (url, body) =>
    authorizedFetch(url, {
        method: "POST",
        body: JSON.stringify(body),
    });

export const getWithAuth = (url) =>
    authorizedFetch(url, {
        method: "GET",
    });

export default authorizedFetch;

import { postWithAuth, getWithAuth } from "../utils/authorizedFetch";

async function sendData() {
    try {
        const response = await postWithAuth("http://localhost:4000/api/v1/resource", {
            key: "value",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function fetchData() {
    try {
        const response = await getWithAuth("http://localhost:4000/api/v1/resource");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
