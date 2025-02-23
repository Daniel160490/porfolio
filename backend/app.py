from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

visit_count = 0
cv_download_count = 0

@app.route("/track-visit", methods=["POST"])
def track_visit():
    global visit_count
    visit_count += 1
    return jsonify({"visits": visit_count})

@app.route("/track-cv-download", methods=["POST"])
def track_cv_download():
    global cv_download_count
    cv_download_count += 1
    return jsonify({"downloads": cv_download_count})

@app.route("/stats", methods=["GET"])
def get_stats():
    return jsonify({
        "visits": visit_count,
        "downloads": cv_download_count
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
