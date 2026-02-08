#!/bin/bash

# Download portrait
cd public/images
wget -q -O "tech_portrait.png" "https://sename.lafricaine.org/wp-content/uploads/2021/11/11_Tech-300x300.png"

# Download icons
mkdir -p tech_icons
cd tech_icons
wget -q -O "urbanattic.png" "https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs/urbanatic-r1xe3ctmrlx4xwdqw6d98ikiwia30m1kc5uj4oqyjc.png"
wget -q -O "syswoe.png" "https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs/syswoe-r1xe3ctmrlx4xwdqw6d98ikiwia30m1kc5uj4oqyjc.png"
wget -q -O "scope.png" "https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs/scope-r1xe3ctmrlx4xwdqw6d98ikiwia30m1kc5uj4oqyjc.png"
wget -q -O "woebots.png" "https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs/woebots-r1xe3ctmrlx4xwdqw6d98ikiwia30m1kc5uj4oqyjc.png"
wget -q -O "plus.png" "https://sename.lafricaine.org/wp-content/uploads/elementor/thumbs/Plus-r1xe3ctmrlx4xwdqw6d98ikiwia30m1kc5uj4oqyjc.png"

# Download gallery images
cd ../tech
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/0-1.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/1-9-1000x720.jpg"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/2-9.jpg"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/3-3.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/4-7.jpg"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/5-3-1000x764.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/6-3.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/7-3.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/8-4.png"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/9-3-1000x720.jpg"
wget -q "https://sename.lafricaine.org/wp-content/uploads/2021/11/10-3-1000x720.jpg"

echo "All tech images downloaded!"
ls -1 | wc -l
