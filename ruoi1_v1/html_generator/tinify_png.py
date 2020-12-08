#!/usr/bin/python3

import tinify
import sys
from os import path
import os
import os.path
  
# Please reset the root directory Path !  
ImageFilePath = "build/web-mobile/assets"

<<<<<<< HEAD
<<<<<<< HEAD
apiKey = "v5XZWyxsSQD3T5yjVLMDyzpbdMkll6FB"
=======
apiKey = "8Z3S38Z6WCtGflfWZPpHZBBZ14PpmX5w"
>>>>>>> 8125e1fa51cc52635531b8c10d882ab13ceea9cb
=======
apiKey = "8Z3S38Z6WCtGflfWZPpHZBBZ14PpmX5w"
>>>>>>> 38382b420f12a3a1a6da0d320a9ed9f8bde97c9a
assert len(apiKey) > 0, "API KEY is necessary, goto https://tinypng.com, sign up and get your own."
tinify.key = apiKey

fileType = [".png", ".jpg"]
  
def isSupportedFile(filename):
    name, ext = os.path.splitext(filename)
    if ext in fileType:
        return True
    return False

def tinifyPic(targetPath):
    for filename in os.listdir(targetPath):
        filepath = os.path.join(targetPath, filename)
        if os.path.isdir(filepath):  
            tinifyPic(filepath) 
        else:  
            if isSupportedFile(filepath):
                print("Compressing: ", filepath)
                compressed_file = tinify.from_file(filepath)
                compressed_file.to_file(filepath)


if __name__ == '__main__':
    tinifyPic(ImageFilePath)