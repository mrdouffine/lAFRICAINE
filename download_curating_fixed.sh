#!/bin/bash

cd public/images/curating

# Array of actual gallery image URLs from the live site
urls=(
"https://sename.lafricaine.org/wp-content/uploads/2021/11/1-10-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/2-1-2-1080x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/2-10.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/3-8-1400x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/4-8-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/5-9-1080x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/6-4-1200x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/7-1-3-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/02/signal-2022-02-08-101947_002-1-1400x800.jpeg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/8-5-1000x483.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/9-5.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/10-4.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/11-7-1000x800.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/12-3.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/13-2.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/14-2-1400x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2020-07-21-a%CC%80-13.32.11-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.42.42-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.45.54-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.48.36-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-02-09-a%CC%80-11.49.52-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/IMG_3038-1-1000x800.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/02/poster_Communalis-1.png"
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

echo "Download complete! Total files: $(ls -1 | wc -l)"
