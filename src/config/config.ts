import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import debug from 'debug';
import { Config } from '../types/config';

const log = debug('app:config');
const trace = debug('trace:config');

// Load environment variables from .env file
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

// Function to resolve [env] placeholders in the config
function resolveEnvPlaceholders(config: any): any {
  // Recursively walk through the config object
  Object.keys(config).forEach((key) => {
    const value = config[key];

    // If the value is an object, resolve its properties
    if (typeof value === 'object' && value !== null) {
      resolveEnvPlaceholders(value);
    }

    // If the value is a string with [env]: prefix, replace it with the env variable
    else if (typeof value === 'string' && value.startsWith('[env]:')) {
      const envVar = value.replace('[env]:', '');
      config[key] = process.env[envVar] || value; // Use the env variable or keep the placeholder if not found
    }
  });

  return config;
}

// Load the config.json file
const configPath =
  process.env.CONFIG_FILE_PATH || path.join('./', 'config', 'config.json');
const configFile = fs.readFileSync(configPath, 'utf8');
let config: Config = JSON.parse(configFile);
trace('loaded config:');
trace(config);

// Resolve [env]: placeholders in the config
config = resolveEnvPlaceholders(config);
trace('resolved:');
trace(config);

export default config;
