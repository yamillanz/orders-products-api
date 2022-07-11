#Este es la base
FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build 

#una vez que se compila se crea el contenedor definitivo
FROM mhart/alpine-node:14
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules 
CMD [ "node", "dist/app.js" ]