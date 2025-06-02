

FROM gcc:latest

WORKDIR /app/

COPY program.cpp .

RUN g++ program.cpp -o program

CMD [ "timeout","5s","./program" ] 