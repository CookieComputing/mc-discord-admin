import path = require('path');
import './commands/ping';
import './commands/hello';

export const commandDir = path.join(__dirname, 'commands');