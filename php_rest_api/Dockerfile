FROM php:8.2-cli

WORKDIR /app
COPY . /app

# Run PHP built-in server on port 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
