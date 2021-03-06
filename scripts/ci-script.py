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
  ('AZURE_CLIENT_ID', 'your_id_here'),
  ('AZURE_SUBSCRIPTION_ID', 'your_id_here'),
  ('AZURE_TENANT_ID', 'your_id_here'),
  ('AZURE_CLIENT_SECRET', 'your_secret_here'),
  ('AZURE_CONFIG_MANAGER_TABLE', 'mc-discord-azure-config-manager'),
  ('AZURE_ACCOUNT', 'your_azure_storage_account'),
]

with open('.env', 'w') as f:
  for (name, val) in variables:
    f.write(f"{name}={val}\n")