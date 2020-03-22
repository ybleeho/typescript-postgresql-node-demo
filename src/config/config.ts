import * as env from '@config/env.json'

const nodeEnv = process.env.NODE_ENV;

export const config = {
    env: nodeEnv || 'development',
    port: process.env.PORT || '3000',
    ...env[nodeEnv]
}
