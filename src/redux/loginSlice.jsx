import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "@/config/axiosInstance";

// Async thunks for API calls
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post('/auth/logout');  // FIXED: URL and axiosInstance
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/refresh-token');  // FIXED: URL and axiosInstance
      return response.data.data; // { accessToken, refreshToken }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      console.log('Fetching user data...');
      // Try fetching user - cookies are sent automatically
      const response = await axiosInstance.get("/me", {
        withCredentials: true,
      });
      console.log('User data fetched successfully', response.data);
      return response.data.data.user;
    } catch (error) {
      console.log('fetchMe error:', error.response?.status);
      
      // Don't try to refresh token here - let the axios interceptor handle it
      // This prevents infinite loops
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch user data"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      await axiosInstance.post('/auth/change-password', { oldPassword, newPassword });  // FIXED: URL and axiosInstance
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Password change failed');
    }
  }
);

export const updateAccountDetails = createAsyncThunk(
  'auth/updateAccountDetails',
  async ({ name, email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch('/auth/update-account', { name, email });  // FIXED: URL (PATCH) and axiosInstance
      return response.data.data; // updated user
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Update failed');
    }
  }
);

// Slice
const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      });

    // Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Refresh Token
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      });

    // Fetch Me (changed from Get Current User)
    builder
      .addCase(fetchMe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // ✅ store the actual user
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.payload;
      });

    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Change Password
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Account
    builder
      .addCase(updateAccountDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, setAuthenticated } = loginSlice.actions;
export default loginSlice.reducer;