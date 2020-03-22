
//https://github.com/vkarpov15/awaitjs-express
/**
 * Given a function that returns a promise, converts it into something you
 * can safely pass into `app.use()`, `app.get()`, etc.
 */

export default function wrap(fn) {
    // Error handling middleware
    if (fn.length === 4) {
        return async function wrappedErrorHandler(error, req, res, next) {
            next = _once(next);
            try {
                await fn(error, req, res, next);
                res.headersSent ? null : next();
            } catch(err) {
                res.headersSent ? null : next(err);
            }
        };
    }

    return async function wrappedMiddleware(req, res, next) {
        next = _once(next);
        try {
            await fn(req, res, next);
            res.headersSent ? null : next();
        } catch(err) {
            res.headersSent ? null : next(err);
        }
    };
}

function _once(fn) {
    let called = false;
    return function() {
        if (called) {
            return;
        }
        called = true;
        fn.apply(null, arguments);
    };
}
