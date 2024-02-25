import requests

API_URL = "https://api-inference.huggingface.co/models/blink7630/storyboard-sketch"
headers = {"Authorization": "Bearer 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"}
import io
from PIL import Image

character_descriptions = {"alex":"alex is a tall and skinny man who wears a tuxedo", "brandon":"brandon is an african american man with an afro"}
scenario = "sketch of alex and brandon are flying a plane"

def generate_string_from_character_descriptions(character_descriptions):
	character_string = ""
	for character in character_descriptions:
		character_string += character_descriptions[character] + ". "

	return character_string

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

print(f"{scenario}. {generate_string_from_character_descriptions(character_descriptions)}")

image_bytes = query({
	"inputs": f"sketch of Alex, a tall and skinny white man who wears a tuxedo and Brandon, an african american man with an afro, wearing a t-shirt are piloting in the cockpit of a plane. No one else is in the scene.",
})

image = Image.open(io.BytesIO(image_bytes))
image.save('file.png', 'PNG') 