FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/cicd.jar /cicd.jar
EXPOSE ${PORT:-8080}
ENTRYPOINT ["java", "-Dserver.port=${PORT:-8080}", "-jar", "/cicd.jar"]