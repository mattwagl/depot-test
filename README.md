# depot-test for large uploads

A simple test repo to verify the maximum file size for uploads in `wolkenkit-depot`.

# Install dependencies

```shell
$ npm install
```

# Starting the backend with wolkenkit-depot

```shell
$ cd backend
$ ../node_modules/wolkenkit/src/bin/wolkenkit.js start
```

## Creating test files with different sizes

```shell
$ cd client
$ mkfile 900k 900k.dat
$ mkfile 2m 2mb.dat
$ mkfile 200m 200mb.dat
```

## Running the uploads

Edit the `client/test.js` to choose which file should be uploaded and run the test.

```shell
$ cd client
$ node test.js
```
