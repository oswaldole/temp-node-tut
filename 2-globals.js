//GLOBALS

//__dirname     -- path to current directory
//__filename    -- file name
//requiere      -- function to use modules (CommonJS)
//module        -- Info about current module
//process       -- info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log("Hello world");
}, 1000);