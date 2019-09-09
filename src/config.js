module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || 'postgres://mtzwowebngfkuv:344cbf891172882cb43ee9feebb2f48910a8a74e169f5bcd17c5eaa26ba5c9bb@ec2-54-83-9-36.compute-1.amazonaws.com:5432/d4bmk59df9j2is',
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://dunder-mifflin:password@localhost/noteful-test',
}