from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def crop_favicon():
    try:
        img = Image.open('public/favicon.png').convert('RGBA')
        # Assuming the background is roughly white or transparent at (0,0)
        # We can also use bboxes based on alpha for transparency
        if img.mode == 'RGBA':
            alpha = img.split()[-1]
            bbox = alpha.getbbox()
            if bbox:
                img = img.crop(bbox)
        
        # Save it back
        img.save('public/favicon.png')
        print("Successfully cropped favicon to edges.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    crop_favicon()
