FROM node:16.16.0 as build-stage
WORKDIR /home/ubuntu/S07P31C204/frontend
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /home/ubuntu/S07P31C204/frontend/build /usr/share/nginx/html
COPY --from=build-stage /home/ubuntu/S07P31C204/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
