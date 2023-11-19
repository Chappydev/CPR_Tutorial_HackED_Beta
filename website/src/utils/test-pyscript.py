import cv2
from cvzone.PoseModule import PoseDetector
from pyscript import document

detector = PoseDetector()

# Open the camera
capture = cv2.VideoCapture(0)

def display_video(frame):
    img = document.querySelector("#video")
    img.src = frame

def generate_frames():
    while True:
        success, img = capture.read()
        if not success:
            continue

        img = detector.findPose(img)
        lmList, bboxInfo = detector.findPosition(img, bboxWithHands=False)

        if lmList:
            # Example: Using right shoulder (landmark 12) and left shoulder (landmark 11)
            # You might need to adjust the landmark indices based on your pose model
            right_shoulder = lmList[12]
            left_shoulder = lmList[11]

            # Estimate heart position (approximate and will vary per individual)
            heart_x = int((right_shoulder[0] + left_shoulder[0]) / 2)
            heart_y = int((right_shoulder[1] + left_shoulder[1]) / 2) + 200  # Adjust 20 as needed

            # Draw a circle at the estimated heart position
            cv2.circle(img, (heart_x, heart_y), 50, (0, 0, 255), -1)

        _, buffer = cv2.imencode('.jpg', img)
        frame = buffer.tobytes()
        # yield (b'--frame\r\n'
        #        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        display_video(frame)

generate_frames()
