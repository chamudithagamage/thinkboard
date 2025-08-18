
const consoleInfo = (req, _, next) => {
    console.log(`Req method: ${req.method} & Req URL: ${req.url}`);
    next();
}

export default consoleInfo;