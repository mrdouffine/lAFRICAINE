import requests
from bs4 import BeautifulSoup
import os
import time

# Get the page
url = "https://sename.lafricaine.org/architecture/"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all gallery links
gallery_links = soup.find_all('a', class_='fg_magnificPopup')
image_urls = [link['href'] for link in gallery_links]

print(f"Found {len(image_urls)} images")

# Create directory
os.makedirs('public/images/architecture', exist_ok=True)

# Download portrait
portrait_url = "https://sename.lafricaine.org/wp-content/uploads/2021/11/13_Architecture-1024x1024.png"
print("Downloading portrait...")
r = requests.get(portrait_url)
with open('public/images/architecture_portrait.png', 'wb') as f:
    f.write(r.content)

# Download all gallery images
for i, img_url in enumerate(image_urls, 1):
    filename = os.path.basename(img_url)
    filepath = f'public/images/architecture/{filename}'
    
    if os.path.exists(filepath):
        print(f"[{i}/{len(image_urls)}] Skipping {filename} (already exists)")
        continue
    
    print(f"[{i}/{len(image_urls)}] Downloading {filename}...")
    try:
        r = requests.get(img_url, timeout=10)
        with open(filepath, 'wb') as f:
            f.write(r.content)
        time.sleep(0.1)  # Be nice to the server
    except Exception as e:
        print(f"  Error: {e}")

print(f"\nDone! Downloaded {len(image_urls)} images")

# Save URLs to a file for the page.js
with open('architecture_urls.txt', 'w') as f:
    for url in image_urls:
        f.write(url + '\n')
