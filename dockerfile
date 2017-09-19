# use a node base image
FROM node:8

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:30000 || exit 1


WORKDIR appFrontEnd/ 
COPY package.json .
COPY package-lock.json .
COPY public ./public/
COPY src ./src/
COPY README.md .
COPY yarn.lock .

# tell docker what port to expose
EXPOSE 3000 

RUN npm install

CMD npm start
