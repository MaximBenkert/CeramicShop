FROM openjdk:17

ENV ENVIRONMENT=prod

LABEL maintainer=max.benkert@posteo.de

# /app entspricht pom.xml Tag <finalName> und jar <packaging>
ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]