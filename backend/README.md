# Fact Checker - Backend

The API and machine learning backend for the Fact Checker application.

Getting Started
---------------
Prerequisites:
- Python 3.11
- Virtual environment tool (e.g., venv)

Installation:

1. Navigate to the backend directory:
```
cd fact-checker/backend
```

2. Set up a virtual environment (Python backend):

On Linux/Mac:
```
python -m venv venv
source venv/bin/activate
```

On Windows:
```
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:
```
pip install -r requirements.txt
```

4. Create a .env file with the following variables:
    - `OPENAI_API_KEY=<<YOUR_OPENAI_API_KEY>>`
    - `SERPER_API_KEY=<<YOUR_SERPER_API_KEY>>`
    - `SCRAPER_API_KEY=<<YOUR_SCRAPER_API_KEY>>`

5. Start the development server:
```
python -m app.app --port 8000
```