# Play smart with the backend

### 1. Prerequisites

- [Install Postman](https://www.getpostman.com/downloads/)

- [Install Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads) - optional

### 2. Presentation - [http://qatools.ro/presenation/postman](http://qatools.ro/presenation/postman)

### 3. Clone or download the repository

```bash
git clone https://github.com/danrusu/play-smart-with-the-backend.git
cd play-smart-with-the-backend
```

### 4. Newman

- installation

```bash
npm install -g newman
```

- usage help

```bash
newman run -h
```

- execution (from `postman` folder)

  - run the PLAY_SMART_WITH_THE_BACKEND collection

  ```bash
  newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json
  ```

  - run only specific folder from collection

  ```bash
  newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json --folder ECHO_SERVICE

  newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json --folder RESTFUL_BOOKER
  ```

  - newman reporters

    - install

    ```bash
     npm install -g newman-reporter-htmlextra newman-reporter-junitfull
    ```

    - run with reporters enabled

    ```bash
    newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json -r json,cli,htmlextra,junitfull
    ```

- Docker execution (from project root)

  - build image

  ```bash
  docker build -t newman .
  ```

  - run container

  ```bash
  docker run --rm -v /$(pwd)/reports:/opt/test/newman newman
  ```
