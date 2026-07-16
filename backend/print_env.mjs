import 'dotenv/config';
console.log('MONGO_URI=' + (process.env.MONGO_URI || '<not set>'));
console.log('UPSTASH_REDIS_REST_URL=' + (process.env.UPSTASH_REDIS_REST_URL || '<not set>'));
console.log('UPSTASH_REDIS_REST_TOKEN=' + (process.env.UPSTASH_REDIS_REST_TOKEN ? '<set>' : '<not set>'));
console.log('NODE_ENV=' + (process.env.NODE_ENV || '<not set>'));
