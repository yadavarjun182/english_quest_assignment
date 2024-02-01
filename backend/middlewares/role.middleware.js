
// Define roles
const ROLES = {
    CREATOR: "CREATOR",
    VIEW_ALL: "VIEW_ALL"
};

// Middleware for checking user roles
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        const userRoles = req.user.roles;

        // Check if the user has any of the allowed roles
        const hasPermission = allowedRoles.includes(ROLES.VIEW_ALL) || allowedRoles.some(role => userRoles.includes(role));

        if (!hasPermission) {
            return res.status(403).json({ message: "Permission denied" });
        }

        next();
    };
};


module.exports = { checkRole, ROLES };