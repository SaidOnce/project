from flask import Flask, request, abort, jsonify
from flask_cors import CORS
import ssl
from dbControl import DB

app = Flask(__name__)
CORS(app)

ALLOWED_IP = "91.243.71.74"

@app.route("/api", methods=['POST'])
def api():
    data = request.json
    username = data.get("username")
    mail = data.get("mail")
    password = data.get("password")
    repeatPassword = data.get("repeatPassword")

    if repeatPassword == password:
        DB().createUser(userName=username, mail=mail, password=password)
        response = {"message": 200, "receivedData": "successfly!"}
        return jsonify(response)
    response = {"message": 300, "receivedData": "Error not the same password and rPassword"}
    return jsonify(response)

@app.route("/apiCheck", methods=['POST'])
def apiCheck():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if DB().checkValidateUser(userName=username, password=password):
        response = {"message": 200}
        return jsonify(response)
    response = {"message": 300}
    return jsonify(response)

"""@app.before_request
def limit_remote_addr():
    client_ip = request.remote_addr
    if client_ip != ALLOWED_IP:
        abort(403)"""


if __name__ == "__main__":
    """context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    context.load_cert_chain("etc/letsencrypt/live/nur-store.kz/fullchain.pem", "etc/letsencrypt/live/nur-store.kz/privkey.pem")
    app.run(host="0.0.0.0", port=5000, ssl_context=context)"""
    app.run(host="0.0.0.0", port=5000)