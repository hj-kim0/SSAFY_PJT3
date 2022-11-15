FROM node:16.16.0 as build-stage
WORKDIR /var/jenkins_home/workspace/deployC204/frontend
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start"]