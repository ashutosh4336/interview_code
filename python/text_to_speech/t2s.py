from gtts import gTTS
import os

# myText = "Please SubScribe to pwndev"

fh = open('input_text.txt', 'r')

myText = fh.read().replace("\n", " ")

language = 'en'
output = gTTS(text = myText, lang = language, slow = False)

output.save("output.mp3")

os.system("start output.mp3")