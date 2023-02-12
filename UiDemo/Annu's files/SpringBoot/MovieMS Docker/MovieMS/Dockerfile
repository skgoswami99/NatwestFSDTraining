FROM openjdk:17-alpine
WORKDIR usr/src
ENV MONGO_URI=mongodb://mongocontainer:27017
ENV MONGO_DB=moviedb
ADD ./target/MovieMS-0.0.1-SNAPSHOT.jar /usr/src/MovieMS-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongocontainer:27017","-jar","MovieMS-0.0.1-SNAPSHOT.jar"]