FROM alpine AS build

ARG pbversion

WORKDIR /build
ADD https://github.com/pocketbase/pocketbase/releases/download/v${pbversion}/pocketbase_${pbversion}_linux_amd64.zip pb.zip
RUN unzip pb.zip

FROM alpine

WORKDIR /pb
COPY --from=build /build/pocketbase .
COPY pb_migrations pb_migrations

EXPOSE 8090
VOLUME ["/pb/pb_data"]

ENTRYPOINT ["/pb/pocketbase", "serve", "--http=:8080"]
