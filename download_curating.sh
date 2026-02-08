#!/bin/bash

cd public/images/curating

# Array of all gallery image URLs
urls=(
"https://sename.lafricaine.org/wp-content/uploads/2021/11/1-10-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/2-1-2-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3038-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3046-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3064-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3070-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3090-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3091-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3093-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3094-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3095-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3096-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3097-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3098-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3099-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3100-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3101-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3102-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3103-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3104-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3105-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3106-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3107-1-1000x800.jpg"
)

# Download each image
for url in "${urls[@]}"; do
    filename=$(basename "$url")
    if [ ! -f "$filename" ]; then
        echo "Downloading $filename..."
        wget -q "$url"
    else
        echo "Skipping $filename (already exists)"
    fi
done

echo "Download complete!"
