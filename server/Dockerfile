FROM node:20
WORKDIR /app
RUN echo "Copying files...."
COPY . .
RUN npm install

# COPY --from=rowthtech /app/build/ /app/user

CMD ["npm","run","start"]
EXPOSE 8081
