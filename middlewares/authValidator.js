import jwt from 'jwt-simple'

const authValidator = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({message: 'Unauthorized'});       
    }
    try {
        const payload = jwt.decode(token, process.env.SECRET);
        req.role = payload.role;
        next();
    } catch (error) {
        return res.status(403).json({message: 'Bad token'});
    }
}

export {authValidator}
