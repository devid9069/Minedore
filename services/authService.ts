// Mock Authentication Service - Reverted from Firebase
export const authService = {
  // Mock Google Sign-In
  loginWithGoogle: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          uid: 'google-user-123',
          displayName: 'Premium Client',
          email: 'client@minedore.com',
          photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        });
      }, 1200);
    });
  },

  // Mock Logout
  logout: async () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  },

  // Mock Observer
  onAuthChange: (callback: (user: any | null) => void) => {
    // Immediate callback with mock data for prototype purposes
    callback({
      displayName: 'Admin Account',
      photoURL: null
    });
    return () => {}; // No-op unsubscribe
  },

  // Mock Guest Mode
  loginAsGuest: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ uid: 'guest-' + Date.now(), displayName: 'Guest User', isAnonymous: true });
      }, 800);
    });
  }
};