FROM node:16.16.0 as build-stage
WORKDIR /var/jenkins_home/workspace/comssa/frontend
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]