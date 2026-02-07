
import os
import requests
import json
import re

# The scraped data from the subagent
scraped_images = [
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/1662494407557.jpeg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/1662494407557.jpeg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/FYSbg5KXoAAN_xW.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/FYSbg5KXoAAN_xW.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1-1200x720.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/AFRICAN_UPDATED_MAP-scaled-1-1400x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/AFRICAN_UPDATED_MAP-scaled-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/5b_Sename-Koffi-Agbodjinou-architecte_et-journaliste-du-Monde_33_IMG_8341_01_12_2021.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/5b_Sename-Koffi-Agbodjinou-architecte_et-journaliste-du-Monde_33_IMG_8341_01_12_2021.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/FGoaWDVXMAQAwnM-1080x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/FGoaWDVXMAQAwnM.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault-2.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault-2.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/numerique-et-la-citoyennete-1000x720.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/numerique-et-la-citoyennete.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1-1.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/fg-1000x720.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/fg.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/f.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/f.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/ESwNv-iXgAENxro-1200x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/ESwNv-iXgAENxro.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_95667226_164903481581350_3787570402102819077_n-1.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_95667226_164903481581350_3787570402102819077_n-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/EQGTNkqWAAAbm_b.jpeg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/EQGTNkqWAAAbm_b.jpeg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/senamekoffiagbodjinou-1-1200x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/senamekoffiagbodjinou-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/i6462_18_l89_r_gp_xl_tangana_makersbrunch_1woelab-1400x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/i6462_18_l89_r_gp_xl_tangana_makersbrunch_1woelab.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/27752327_10214784803881061_1631979578464263465_n-1-960x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/27752327_10214784803881061_1631979578464263465_n-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/DtmWEj_WwAARidh.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/DtmWEj_WwAARidh.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/woelab-2.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/woelab-2.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/DqR3FoNXcAAnCmv-1000x675.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/DqR3FoNXcAAnCmv.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/sddefault.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/WhatsApp-Image-2019-06-13-at-12.37.46-1024x682-1-1-1000x682.jpeg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/WhatsApp-Image-2019-06-13-at-12.37.46-1024x682-1-1.jpeg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_61822584_100993714540340_2236663795268420619_n-1.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/sename_61822584_100993714540340_2236663795268420619_n-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/11-2.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/11-2.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/176907729_10226753454720699_7630062748010789327_n-1-1000x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/176907729_10226753454720699_7630062748010789327_n-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/46847387_501890176963557_9115443056349282304_n.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/46847387_501890176963557_9115443056349282304_n.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-23-a-13.02.57.png",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-23-a-13.02.57.png",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/hubcite-modele-africain-smart-city-Les-Smart-Grids-4-1.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/hubcite-modele-africain-smart-city-Les-Smart-Grids-4-1.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-1000x720.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-18-a-15.51.38-1000x458-1.png",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/Capture-decran-2016-09-18-a-15.51.38-1000x458-1.png",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/4_Lectures-1-1.png",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/4_Lectures-1-1.png",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2021/11/11221521_1050973144914522_1108989281455353354_n-1.jpeg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2021/11/11221521_1050973144914522_1108989281455353354_n-1.jpeg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/11412266_10206561376740522_5162404157653836536_n-640x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/11412266_10206561376740522_5162404157653836536_n.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/60.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/60.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/P1150862-1400x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/P1150862-scaled.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/C0saXgIXAAAZMUO.jpeg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/C0saXgIXAAAZMUO.jpeg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/11169775_10206205935534714_7140447124705382023_o-1000x800.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/11169775_10206205935534714_7140447124705382023_o.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-3.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/maxresdefault-3.jpg",
    "alt": ""
  },
  {
    "src": "https://sename.lafricaine.org/wp-content/uploads/2022/11/226036_4260300353123_371144000_n.jpg",
    "href": "https://sename.lafricaine.org/wp-content/uploads/2022/11/226036_4260300353123_371144000_n.jpg",
    "alt": ""
  }
]

def download_gallery():
    if not os.path.exists("public/images/lectures"):
        os.makedirs("public/images/lectures")

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    local_data = []

    for i, item in enumerate(scraped_images):
        src = item['src']
        original_href = item['href']
        
        # Determine extension
        ext = src.split('.')[-1]
        if '?' in ext: ext = ext.split('?')[0]
        if ext.lower() not in ['png', 'jpg', 'jpeg', 'gif']:
            ext = 'jpg'
            
        filename = f"gallery_{i+1}.{ext}"
        filepath = f"public/images/lectures/{filename}"
        
        # Download
        print(f"Downloading {filename}...")
        try:
            r = requests.get(src, headers=headers, timeout=10)
            if r.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(r.content)
            else:
                print(f"Failed to download {src}: {r.status_code}")
                # Use placeholder if fail
                filename = "placeholder.jpg" # Assuming we handle this
        except Exception as e:
            print(f"Error downloading {src}: {e}")
            
        local_data.append({
            "id": i+1,
            "src": f"/images/lectures/{filename}",
            "link": original_href
        })
        
    # Save the local data mapping to a JSON file to be used by the page component
    with open("public/lectures_gallery.json", "w") as f:
        json.dump(local_data, f, indent=2)
    
    print("Download complete. Data saved to public/lectures_gallery.json")

if __name__ == "__main__":
    download_gallery()
