FROM cypress/browsers:node18.12.0-chrome107
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install 

COPY cypress cypress
COPY cypress.config.js cypress.config.js

COPY init.sh init.sh

CMD ["bash", "init.sh"] 
