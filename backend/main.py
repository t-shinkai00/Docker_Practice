from fastapi import FastAPI, HTTPException, status

app = FastAPI()


@app.get("/api")
async def root():
    return {"message": "Hello World"}


@app.get("/api/add")
async def add(arg1: str, arg2: str):
    return {"result": float(arg1) + float(arg2)}


@app.get("/api/sub")
async def add(arg1: str, arg2: str):
    return {"result": float(arg1) - float(arg2)}


@app.get("/api/mult")
async def add(arg1: str, arg2: str):
    return {"result": float(arg1) * float(arg2)}


@app.get("/api/div")
async def add(arg1: str, arg2: str):
    if float(arg2) == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=[
                {
                    "type": "ZeroDivisionError",
                    "loc": ["query", "arg2"],
                    "msg": "division by zero",
                    "input": 0,
                }
            ],
        )
    return {"result": float(arg1) / float(arg2)}
