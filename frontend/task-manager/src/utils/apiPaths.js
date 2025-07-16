export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Register a new user (Admin or Member)
    LOGIN: "/api/auth/login", // Authenticate user and return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user profile (Require JWT token)
  },

  USERS: {
    GET_ALL_USERS: "/api/users", // Get all Users (Admin only)
    GET_USERS_BY_ID: (userId) => `/api/users/${userId}`, // Get user by ID
    CREATE_USER: "/api/users", // Create a new user (Admin only)
    UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user by ID (Admin only)
    DELETE_USER: (userId) => `/api/users/${userId}`, // Delete user by ID (Admin only)
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get dashboard data (Admin only)
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get user dashboard data (User only)
    GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin: all, User: only assigned)
    GET_TASKS_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by ID
    CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task by ID
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete task by ID (Admin only)

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task status (User or Admin)
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, // Update task checklist (User or Admin)
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Export tasks as an excel file
    EXPORT_USERS: "/api/reports/export/users", // Export user-task report as an excel file
  },

  IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image",
  },
};