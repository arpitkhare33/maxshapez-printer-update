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
        jwt_secret = data['JwtSecret']
except FileNotFoundError:
    print("Error: 'data.json' not found. Please ensure the file exists.")
except json.JSONDecodeError:
    print("Error: Could not decode JSON from 'data.json'. Check file format.")
    

# ============= Trying to get the builds ===================
token = jwt.encode({"Token": auth_token}, jwt_secret)

auth_headers = {
    "authorization": f"Bearer {token}"
}
print(auth_headers)
target_url = server_url + "/buildDetails"
print(target_url)
response = requests.get(target_url, headers=auth_headers)

print(response)