function promiseTest() {
    return new Promise((resolve, reject) => {
        console.log("called");
        setTimeout(() => {
            reject("done")
            console.log('Java');

        }, 2000)
    })
}
async function test() {
    const p = await promiseTest();
    console.log(p, 'run');
}
test().then(() => {
    console.log("hi")
});