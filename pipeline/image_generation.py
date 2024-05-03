import requests

API_URL = "https://api-inference.huggingface.co/models/blink7630/storyboard-sketch"
headers = {"Authorization": "Bearer "}
import io
from PIL import Image

character_descriptions = [{"index":0, "name":"alex", "description":"alex is a fat white guy"}, {"index":1, "name":"brad", "description":"brad is a skinny and tall indian man"}]
scenario = "alex and brandon are flying a plane"

def lowercase_data(character_descriptions, scenario):
    scenario = scenario.lower()
    
    for character in character_descriptions:
        character['name'] = character['name'].lower()
        character['description'] = character['description'].lower()
    
    return character_descriptions, scenario

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

def insert_character_descriptions(character_descriptions, scenario):
    character_descriptions.sort(key=lambda x: x['index'], reverse=True)
    for character_info in character_descriptions:
        name = character_info['name']
        description = character_info['description']
        scenario = scenario.replace(name, f"{name.capitalize()}, ({description})")
    return scenario

print(f"{insert_character_descriptions(character_descriptions, scenario)}")

image_bytes = query({
	"inputs": f"{scenario}. {insert_character_descriptions(character_descriptions,scenario)}",
})

image = Image.open(io.BytesIO(image_bytes))
image.save('file.png', 'PNG') 
