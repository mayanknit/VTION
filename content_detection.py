# content_detection.py
import tensorflow as tf
import numpy as np
import cv2

model = tf.keras.models.load_model('path/to/your/model.h5')

def detect_content(frame):
    img = cv2.resize(frame, (224, 224))
    img = np.expand_dims(img, axis=0)
    predictions = model.predict(img)
    return predictions

cap = cv2.VideoCapture('path/to/video')
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    content = detect_content(frame)
    print(content)

cap.release()
cv2.destroyAllWindows()
