# Deployment Configuration for Personalization Feature

## Overview
This document explains how to properly configure the frontend application for deployment when using the personalization feature.

## Environment Variables
To configure the API endpoint for deployment, set the following environment variable:

```bash
REACT_APP_API_BASE_URL=https://your-actual-backend-url.com
```

### For Docusaurus Deployment
If you're using Docusaurus for deployment, you can set the environment variable in your deployment configuration:

For Netlify, add to `netlify.toml`:
```toml
[build.environment]
  REACT_APP_API_BASE_URL = "https://your-backend-api.com"
```

For Vercel, add to project settings:
- Key: `REACT_APP_API_BASE_URL`
- Value: `https://your-backend-api.com`

For GitHub Pages, set in your workflow file:
```yaml
- name: Build
  run: |
    REACT_APP_API_BASE_URL=https://your-backend-api.com npm run build
```

### For Hugging Face Spaces Deployment
If deploying to Hugging Face Spaces, the URL should match your space URL:
```
REACT_APP_API_BASE_URL=https://your-username-physical-ai-humanoid-robotics-textbook.hf.space
```

## Backend API Requirements
Make sure your backend API is:
1. Accessible from the frontend domain
2. Properly configured with CORS to allow requests from your frontend
3. Running and healthy at the specified endpoint

## Troubleshooting
- **405 Method Not Allowed**: Check that the backend API is running and the endpoint exists
- **CORS errors**: Verify that the backend allows requests from your frontend domain
- **JSON parsing errors**: Confirm that the backend returns proper JSON responses
- **Network errors**: Ensure the API URL is accessible and properly formatted

## Development vs Production
- **Development**: Uses proxy configuration to forward API requests to backend
- **Production**: Makes direct requests to the configured API base URL