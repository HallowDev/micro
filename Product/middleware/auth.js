const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
const authHeader = req.headers['authorization'];
const token = authHeader.split(' ')[1];

if (!token) return res.status(403).json({ message: 'No token provided' });

jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log('Token:', token);
    console.log('Secret:', process.env.JWT_SECRET);
    console.log('Error:', err);
    console.log('Decoded:', decoded);
    if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};
