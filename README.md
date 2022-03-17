# Google Apps Script Web App Template

- Typescript for server & client
- Using rollup and HTML inlining script to develop with modules but push plain HTML to script.google.com
- Using make

## Init with [clasp](https://github.com/google/clasp)

```sh
$ mkdir gas # or make
$ clasp create --rootDir gas # untested; just make sure .clasp.json `"rootDir": "gas"` is set
```

## Usage

Build with
```
make
```

Build and push to script.google.com with
```
make push
```