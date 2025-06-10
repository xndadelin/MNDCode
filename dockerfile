

FROM gcc:13.2

WORKDIR /app/

ARG FILE

COPY running/${FILE} .

RUN g++ ${FILE} -o program

CMD [ "timeout","5s","stdbuf","-oL","./program" ]   

# docker build -t running -f Dockerfile --build-arg FILE=main.cpp .
# docker run --rm running
# docker run --rm -v $(pwd):/app running
# docker run --rm -v $(pwd):/app running main.cpp