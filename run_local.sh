#!/bin/bash

# ATTETION: This script assume a .env file. Check the README.md

# --- Backend Server Start ---
set -e 
echo "Starting backend server..."
cd backend/
node server.js &
BACKEND_PID=$!
cd ..

# --- Frontend Server Start ---
echo "Starting frontend server..."
cd front/
serve -p 3001 &
FRONTEND_PID=$!
cd ..

echo "------------------------------------------------------"
echo "Backend server PID: $BACKEND_PID"
echo "Frontend server PID: $FRONTEND_PID"
echo "To stop both servers, run the following command:"
echo "kill $BACKEND_PID $FRONTEND_PID"
echo "------------------------------------------------------"  