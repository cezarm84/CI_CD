# Build stage
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/cicd-0.0.1-SNAPSHOT.jar /cicd.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/cicd.jar"]