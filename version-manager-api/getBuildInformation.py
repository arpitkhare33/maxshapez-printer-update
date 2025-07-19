import os
import requests
from datetime import datetime
import json
import jwt

try:
    with open("agentConfig.json", "r") as f:
        data = json.load(f)
        server_url = data['ServerUrl']
        auth_token = data['AuthToken']
        header_name = data['HeaderName']
except FileNotFoundError:
    print("Error: 'data.json' not found. Please ensure the file exists.")
except json.JSONDecodeError:
    print("Error: Could not decode JSON from 'data.json'. Check file format.")
    

# ============= Trying to get the builds ===================
app_headers = {
            header_name: auth_token
        }
response = requests.get(server_url+ "/buildDetails", headers=app_headers)
print(response.content)