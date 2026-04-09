FROM python:3.11-slim

WORKDIR /backend

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# HF Spaces expects port 7860; local/compose can override via --port flag
EXPOSE 7860

CMD ["python", "-m", "app.app", "--port", "7860"]
