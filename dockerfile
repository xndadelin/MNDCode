ARG cppfile

FROM gcc:latest

WORKDIR /app/

COPY ${cppfile} ./program.cpp

RUN g++ program.cpp -o program

CMD [ "./program" ] 