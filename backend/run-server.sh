#!/bin/bash

npx prisma db push --accept-data-loss
node prisma/seed/main.js
pm2 start ecosystem.config.json --no-daemon