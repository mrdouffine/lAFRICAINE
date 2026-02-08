#!/bin/bash

cd public/images/photo

# Array of all image URLs
urls=(
"https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1078--scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/11/MG_1096--scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301015-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301024-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/SCAL2208301027-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8576-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8586.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/04/IMG_8582.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/11/Sename-Koffi-Agbodjinou_small.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/11-8.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/16-1.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/3-9.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/6_-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/8-6.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/9-6.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/9-7.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/10-5.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/12-1.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/61462306_1547142795421194_399570209230290944_o-1.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/14-3.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/20-1-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/11/7-6-1000x800-2.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/20-2.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/13-2-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/Katesi_0.png"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/Sename-Koffi-Agbodjinou.png"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/22-1.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/Capture-decran-2016-09-21-a-04.00.13.png"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/12628349_1030718446985346_1593670128379673247_o.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/12513611_1030717736985417_4981972911708972975_o.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/Sename-Koffi-Agbodjinou_Portrait.jpg.png"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/img_4609.jpeg"
"https://sename.lafricaine.org/wp-content/uploads/2021/11/15-1-scaled.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/11/sename.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/7.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/10.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/16.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/6.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/EPPKChantier6.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/30250_1422543170967_2791861_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/30250_1422543050964_3612625_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/10392178_1204772366833_2615913_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/10392178_1204071589314_8021967_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/0.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/530300_3506288703303_1946603310_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/285341621_726699948376407_5321727115586690048_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/284790006_517939913366361_6746658883517296081_n.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/324282_2420302794334_1089771841_o.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/333708_2420299314247_1184997561_o.jpg"
"https://sename.lafricaine.org/wp-content/uploads/2022/09/228091_1932853088396_2700466_n.jpg"
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
