from PIL import Image

def create_perfect_favicon():
    try:
        # Load the main logo which has the icon + text
        img = Image.open('public/logo.png').convert('RGBA')
        
        # 1. Find the bounding box of the non-transparent content
        # If it's on white background, we might need to treat white as transparent
        # Let's assume there's an alpha channel or we can detect the "white"
        
        # Get data
        datas = img.getdata()
        
        # Simple white-to-transparent if needed, but let's try alpha first
        width, height = img.size
        
        # Find the icon part (it's on the left)
        # We'll crop the left ~40% of the image to get the icon
        icon_part = img.crop((0, 0, int(width * 0.45), height))
        
        # Trim all whitespace/transparency from this icon part
        alpha = icon_part.split()[-1]
        bbox = alpha.getbbox()
        
        # If the background is white instead of transparent, let's find the content another way
        if not bbox or (bbox[2] - bbox[0] < 10):
            # Fallback: find non-white pixels
            # (Assuming white is everything > 250)
            left, top, right, bottom = width, height, 0, 0
            for y in range(icon_part.height):
                for x in range(icon_part.width):
                    p = icon_part.getpixel((x, y))
                    if p[0] < 250 or p[1] < 250 or p[2] < 250:
                        left = min(left, x)
                        top = min(top, y)
                        right = max(right, x)
                        bottom = max(bottom, y)
            bbox = (left, top, right + 1, bottom + 1)

        if bbox:
            icon = icon_part.crop(bbox)
            
            # Now we have the raw icon. To make it "BIG" in the tab, 
            # we must make it fit into a SQUARE canvas perfectly.
            # Tab icons are square.
            
            size = max(icon.width, icon.height)
            square_img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
            
            # Paste icon in the middle
            offset_x = (size - icon.width) // 2
            offset_y = (size - icon.height) // 2
            square_img.paste(icon, (offset_x, offset_y), icon)
            
            # Save it
            square_img.save('public/favicon.png')
            print(f"Created perfect square favicon. Original icon size: {icon.width}x{icon.height}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_perfect_favicon()
