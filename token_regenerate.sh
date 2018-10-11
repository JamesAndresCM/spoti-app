#!/usr/bin/env bash

CLIENT_SECRET=YOUR_CLIENT_SECRET
CLIENT_ID=YOUR_CLIENT_ID

token=$(curl -X POST \
  https://accounts.spotify.com/api/token \
  --silent \
  -H "content-type: application/x-www-form-urlencoded" \
  -d "client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}&grant_type=client_credentials" | jq -r ".access_token")

sed -i "s/Bearer .*$/Bearer ${token}',/" src/app/services/spotify.service.ts

#execute cron c/50 min (token expires 3600s)
#*/50 * * * * /usr/bin/bash token_generate.sh