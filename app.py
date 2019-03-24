from flask import (
    Blueprint,
    Flask,
    Response
)

APPLICATION_JSON = 'application/json'

app = Flask(
    __name__,
    static_url_path = ''  # Serve static folder files on root url
)

@app.route('/')
def index():
    return app.send_static_file('index.html')

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/categories')
def get_categories():
    with open('scrape-stuff/categories.json') as f:
        return Response(f.read(), mimetype = APPLICATION_JSON)

@api.route('/clubs')
def get_clubs():
    with open('scrape-stuff/club-data.json') as f:
        return Response(f.read(), mimetype = APPLICATION_JSON)

app.register_blueprint(api)
