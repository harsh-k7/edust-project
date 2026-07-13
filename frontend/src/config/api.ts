// API configuration for backend connection
const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
  // Test endpoint
  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/hello`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error connecting to backend:', error);
      throw error;
    }
  },

  // Add more API methods here as needed
  // Example:
  // async getData() {
  //   const response = await fetch(`${API_BASE_URL}/data`);
  //   return response.json();
  // }
}; 