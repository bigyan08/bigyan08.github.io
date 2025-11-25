#!/bin/bash

# Portfolio Website Quick Start Script
# This script helps you view your portfolio locally

echo "==================================="
echo "Bigyan Aryal's Portfolio Website"
echo "==================================="
echo ""

# Check if Python is installed
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ Python is not installed. Please install Python first."
    exit 1
fi

echo "✅ Python found: $PYTHON_CMD"
echo ""

# Start the server
echo "🚀 Starting local web server on port 8000..."
echo ""
echo "📂 Server location: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
echo "==================================="
echo ""

$PYTHON_CMD -m http.server 8000
