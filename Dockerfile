FROM node:14
WORKDIR /app
EXPOSE 3333
COPY . .
RUN npm install
ENTRYPOINT npm run dev
