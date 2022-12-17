FROM node:lts as dependencies
WORKDIR /newspost-ui
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /newspost-ui
COPY . .
COPY --from=dependencies /newspost-ui/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /newspost-ui
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /newspost-ui/next.config.js ./
COPY --from=builder /newspost-ui/public ./public
COPY --from=builder /newspost-ui/.next ./.next
COPY --from=builder /newspost-ui/node_modules ./node_modules
COPY --from=builder /newspost-ui/package.json ./package.json
COPY --from=builder /newspost-ui/pages ./pages
COPY --from=builder /newspost-ui/components ./components
COPY --from=builder /newspost-ui/services ./services
COPY --from=builder /newspost-ui/store ./store
COPY --from=builder /newspost-ui/styles ./styles
COPY --from=builder /newspost-ui/constants.js ./constants.js

EXPOSE 3000
CMD ["yarn", "start"]