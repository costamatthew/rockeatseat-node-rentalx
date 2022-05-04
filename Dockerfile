FROM node
WORKDIR /usr/app
EXPOSE 3333
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
