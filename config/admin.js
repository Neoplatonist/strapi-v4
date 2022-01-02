module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e0cad8503f02b0bd213df222126ba19'),
  },
});
