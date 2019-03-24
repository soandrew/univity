from flask import (
    Blueprint,
    Flask,
    jsonify
)

app = Flask(
    __name__,
    static_url_path = ''  # Serve static folder files on root url
)

@app.route('/')
def index():
    return app.send_static_file('index.html')

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/tags')
def tags():
    tags = ['a', 'b']
    return jsonify(tags)

app.register_blueprint(api)
