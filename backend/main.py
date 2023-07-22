from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
async def root():
    return {"message": "Hello World"}


@app.get("/no-proxy-header")
async def noProxyHeader(request: Request):
    print(request.headers)
    return {"message": "no proxy header"}
