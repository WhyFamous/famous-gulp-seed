#[Famous][1]-[Gulp][2]-Seed
> A seed project to get started with the famous engine with Browserify and using Gulp as a task manager

### Features
 - Browserify using watchify and babelify (ES6)
 - Multiple bundle support using the gulp/config:browserify:bundleConfigs
 - Uses Browser-Sync for serving up the dev

---

###Installation

```bash
git clone https://github.com/WhyFamous/famous-gulp-seed
cd famous-gulp-seed
# rm -rf .git && git init && git commit -m "Initial Commit" # optionally reset git history
npm i # install dependencies
```

---

###Development  
 Run the dev server with ```gulp``` or ```gulp dev```

 - Now the dev server should be running on localhost:3000

---  

###Production  
 Run the build for production with ```gulp production```

 - Builds everything into `dist`

---  

###LICENSE

MIT

[1]: https://github.com/Famous/engine
[2]: https://github.com/gulpjs/gulp
