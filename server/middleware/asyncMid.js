module.exports = function(hendler) {
    return async (req, res, next) => {
        try {
            await hendler(req, res);
        } catch (err) {
            next(err);
        }
    }
}