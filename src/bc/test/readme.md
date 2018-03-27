If running a continuos integration this folder must contain something, because running truffle test
doesn't check the filesystem status and would return the following error
  TypeError: Cannot read property 'filter' of undefined
    at truffle-core/lib/commands/test.js:47:1
    at truffle-core/~/node-dir/lib/paths.js:72:1
    at FSReqWrap.oncomplete (fs.js:166:21)

