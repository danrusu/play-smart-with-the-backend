FROM node:18-alpine3.15

WORKDIR /opt/test

COPY postman/*.json ./

RUN npm install -g \
  newman \
  newman-reporter-htmlextra \
  newman-reporter-junitfull

ENTRYPOINT [ "newman", \
  "run", \
  "PLAY_SMART_WITH_THE_BACKEND.postman_collection.json", \
  "-e", \
  "PLAY_SMART_WITH_THE_BACKEND.postman_environment.json", \
  "-r", \
  "json,cli,htmlextra,junitfull" \
]
