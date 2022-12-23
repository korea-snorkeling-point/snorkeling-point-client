FROM node:14

COPY . /

# 초기 커서 위치를 설정할 수 있음
WORKDIR /KSNKPoint

RUN yarn install
RUN yarn build

CMD yarn start

EXPOSE 3000
