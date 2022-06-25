#!/usr/bin/env python

"""
A script designed to run before Github actions so that CI can set up a .env file
for testing purposes.
"""

variables = [
  ('APP_ID', 'some_app_id'),
  ('GUILD_ID', 'some_guild_id'),
  ('DISCORD_TOKEN', 'some_discord_token'),
  ('PUBLIC_KEY', 'some_public_key'),
  ('AZURE_ENDPOINT', 'https://localazureendpoint.com'),
]

with open('.env', 'w') as f:
  for (name, val) in variables:
    f.write(f"{name}={val}\n")