docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avavav-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avavav-java/app ../../..
