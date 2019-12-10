# Play smart with the backend

### 1. Prerequisites

    - [Install Postman ](https://www.getpostman.com/downloads/)

    - [Install Node.js](https://nodejs.org/en/download/)
    
    - [Git](https://git-scm.com/downloads) - optional

### 2. [Presentation](https://github.com/danrusu/play-smart-with-the-backend/blob/master/Play_smart_with_the_backend.pdf)

### 3. Clone or download the repository
   ```
   git clone https://github.com/danrusu/play-smart-with-the-backend.git
   cd play-smart-with-the-backend
   ```

### 4. Newman 

   - installation 
   ```
   npm install -g newman
   newman -h
   ```

   - run the PLAY_SMART_WITH_THE_BACKEND collection 
   ```
   cd postman  
   newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json
   ```

   - run only specific folder from collection
   ```
   newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json --folder   ECHO_SERVICE

   newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json --folder RESTFUL_BOOKER
   ```

   - newman reporters - install and run with reporters enabled
   ```
   npm install -g newman-reporter-htmlextra
   npm install -g newman-reporter-junitfull

   newman run PLAY_SMART_WITH_THE_BACKEND.postman_collection.json -e PLAY_SMART_WITH_THE_BACKEND.postman_environment.json -r json,cli,html,htmlextra,junitfull

   cd newman
   ls
   ```
