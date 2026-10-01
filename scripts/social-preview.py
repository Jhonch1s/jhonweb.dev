from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "social-preview.png"
FONT = Path("C:/Windows/Fonts/arialbd.ttf")

image = Image.new("RGB", (1200, 630), "#121413")
draw = ImageDraw.Draw(image)
white = "#f3f4ee"
lime = "#d9f067"
muted = "#b6bdb5"

draw.rectangle((64, 64, 1136, 68), fill=lime)
draw.rectangle((80, 99, 148, 167), outline=white, width=2)
draw.text((89, 116), "JG", font=ImageFont.truetype(FONT, 31), fill=white)
draw.ellipse((133, 141, 140, 148), fill=lime)
draw.text((175, 117), "JHON GUIMARAENS", font=ImageFont.truetype(FONT, 25), fill=white)

draw.text((80, 225), "DESARROLLO WEB · PAYSANDÚ", font=ImageFont.truetype(FONT, 23), fill=lime)
headline = ImageFont.truetype(FONT, 73)
draw.text((76, 269), "Una web que", font=headline, fill=white)
draw.text((76, 351), "explique bien", font=headline, fill=lime)
draw.text((76, 433), "lo que hacés.", font=headline, fill=white)

draw.rectangle((831, 192, 1120, 516), fill="#1d211e", outline="#3b443c", width=2)
draw.text((850, 270), "JG", font=ImageFont.truetype(FONT, 150), fill=white)
draw.ellipse((1051, 398, 1099, 446), fill=lime)

draw.line((80, 546, 1120, 546), fill="#3b443c", width=2)
draw.text((80, 566), "Sitios web para negocios de todo Uruguay.", font=ImageFont.truetype(FONT, 27), fill=muted)

image.save(OUT, optimize=True)
