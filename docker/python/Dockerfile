FROM python:3.11.4
WORKDIR /app

COPY ./docker/python/requirements.txt .
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./backend/ .
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]