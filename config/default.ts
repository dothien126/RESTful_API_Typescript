export default {
    PORT: 3030,
    DB_URI: 'mongodb:localhost:27017/rest-api-typescript',
    SALT_PASSWORD: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: ``,
    accessTokenPublicKey: ``,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
}