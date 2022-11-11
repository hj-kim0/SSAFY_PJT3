#FROM adoptopenjdk/openjdk11
## ARG JAR_FILE=target/*.jar
#COPY build/libs/comssa-0.0.1-SNAPSHOT.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar","--spring.config.name=application-prod"]

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew build

FROM adoptopenjdk:11-jdk
COPY --from=builder build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]