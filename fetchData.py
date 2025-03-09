import os
from PIL import Image

def get_image_info(folder_path):
    image_data = []
    image_extensions = (".jpg", ".jpeg", ".png", ".bmp", ".gif", ".webp")

    # Get all image files from the folder
    images = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]
    
    for idx, image_name in enumerate(images, start=1):
        image_path = os.path.join(folder_path, image_name)
        
        # Open the image to get width and height
        with Image.open(image_path) as img:
            width, height = img.size
        
        # Append dictionary to the list
        image_data.append({
            "id": idx,
            "link": os.path.relpath(image_path, folder_path),
            "width": width,
            "height": height
        })

    return image_data

# Example usage
folder = "public/Images"  # Change this to your image folder path
image_list = get_image_info(folder)
print(image_list)
